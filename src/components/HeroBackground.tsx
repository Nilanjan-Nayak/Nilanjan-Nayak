import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function HeroBackground() {
    const containerRef = useRef<HTMLDivElement>(null);
    const animationIdRef = useRef<number | null>(null);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'high-performance' });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, window.innerWidth < 768 ? 1.5 : 2));
        renderer.setClearColor(0x020812, 1);
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.1;
        el.appendChild(renderer.domElement);

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.set(0, 10, 50);
        camera.lookAt(0, 0, 0);

        // Lights
        scene.add(new THREE.AmbientLight(0x334155, 0.4));
        const kl = new THREE.DirectionalLight(0xdbeafe, 2.2); kl.position.set(14, 16, 24); scene.add(kl);
        const r1 = new THREE.DirectionalLight(0x60a5fa, 1.6); r1.position.set(-12, 6, -16); scene.add(r1);
        const pt = new THREE.PointLight(0x93c5fd, 1.8, 60); pt.position.set(0, 0, 22); scene.add(pt);

        // Shared simplex noise GLSL
        const NOISE = `
            vec3 m3(vec3 x){return x-floor(x*(1./289.))*289.;}
            vec4 m4(vec4 x){return x-floor(x*(1./289.))*289.;}
            vec4 pm(vec4 x){return m4(((x*34.)+1.)*x);}
            vec4 ti(vec4 r){return 1.79284291400159-0.85373472095314*r;}
            float sn(vec3 v){
                const vec2 C=vec2(1./6.,1./3.); const vec4 D=vec4(0.,.5,1.,2.);
                vec3 i=floor(v+dot(v,C.yyy)); vec3 x0=v-i+dot(i,C.xxx);
                vec3 g=step(x0.yzx,x0.xyz); vec3 l=1.-g;
                vec3 i1=min(g.xyz,l.zxy); vec3 i2=max(g.xyz,l.zxy);
                vec3 x1=x0-i1+C.xxx; vec3 x2=x0-i2+C.yyy; vec3 x3=x0-D.yyy;
                i=m3(i);
                vec4 p=pm(pm(pm(i.z+vec4(0.,i1.z,i2.z,1.))+i.y+vec4(0.,i1.y,i2.y,1.))+i.x+vec4(0.,i1.x,i2.x,1.));
                float n_=.142857142857; vec3 ns=n_*D.wyz-D.xzx;
                vec4 j=p-49.*floor(p*ns.z*ns.z);
                vec4 x_=floor(j*ns.z); vec4 y_=floor(j-7.*x_);
                vec4 x=x_*ns.x+ns.yyyy; vec4 y=y_*ns.x+ns.yyyy;
                vec4 h=1.-abs(x)-abs(y);
                vec4 b0=vec4(x.xy,y.xy); vec4 b1=vec4(x.zw,y.zw);
                vec4 s0=floor(b0)*2.+1.; vec4 s1=floor(b1)*2.+1.;
                vec4 sh=-step(h,vec4(0.));
                vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy; vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
                vec3 p0=vec3(a0.xy,h.x); vec3 p1=vec3(a0.zw,h.y);
                vec3 p2=vec3(a1.xy,h.z); vec3 p3=vec3(a1.zw,h.w);
                vec4 norm=ti(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
                p0*=norm.x; p1*=norm.y; p2*=norm.z; p3*=norm.w;
                vec4 m=max(.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.); m=m*m;
                return 42.*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
            }
            float fbm(vec3 p){
                float v=0.,a=.5;
                for(int i=0;i<6;i++){ v+=a*sn(p); p=p*2.1+vec3(1.7,9.2,5.3); a*=.5; }
                return v;
            }
        `;

        // ══════════════════════════════════════════
        //  LAYER 0 – FULLSCREEN AURORA/SMOKE BG
        //  (rendered as screen-space quad, no depth)
        // ══════════════════════════════════════════
        const bgScene  = new THREE.Scene();
        const bgCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

        const bgMat = new THREE.ShaderMaterial({
            depthTest: false, depthWrite: false,
            uniforms: { uTime: { value: 0 } },
            vertexShader: `varying vec2 vUv; void main(){ vUv=uv; gl_Position=vec4(position.xy,0.,1.); }`,
            fragmentShader: `
                varying vec2 vUv;
                uniform float uTime;
                ${NOISE}

                void main(){
                    vec2 uv = vUv - 0.5;
                    uv.x *= 1.78; // aspect correction approximation

                    // ── Domain-warped nebula base ──
                    vec3 q = vec3(uv * 1.2, uTime * 0.028);
                    float wx = fbm(q);
                    float wy = fbm(q + vec3(4.1, 2.7, 1.3));
                    vec3 warp = vec3(uv + 0.38 * vec2(wx, wy), uTime * 0.022);
                    float n = fbm(warp * 1.5) * 0.5 + 0.5;

                    // ── Aurora ribbon bands ──
                    // Band 1 – cyan-green (top area)
                    float a1y = uv.y - 0.32 - sin(uv.x * 2.8 + uTime * 0.35) * 0.12
                              - sin(uv.x * 6.2 - uTime * 0.20) * 0.05;
                    float b1 = exp(-a1y * a1y * 22.0);

                    // Band 2 – electric blue (mid)
                    float a2y = uv.y + 0.04 + sin(uv.x * 3.4 - uTime * 0.28) * 0.10
                              + sin(uv.x * 7.1 + uTime * 0.18) * 0.04;
                    float b2 = exp(-a2y * a2y * 18.0);

                    // Band 3 – violet (lower)
                    float a3y = uv.y - 0.22 + sin(uv.x * 2.1 + uTime * 0.22) * 0.14
                              + sin(uv.x * 5.3 - uTime * 0.15) * 0.06;
                    float b3 = exp(-a3y * a3y * 25.0);

                    // shimmer along bands
                    float sh1 = 0.7 + 0.3 * sin(uv.x * 22. + uTime * 1.4);
                    float sh2 = 0.7 + 0.3 * sin(uv.x * 18. - uTime * 1.1);
                    float sh3 = 0.7 + 0.3 * sin(uv.x * 26. + uTime * 0.9);

                    // ── Color mixing ──
                    // Deep space base
                    vec3 col = mix(vec3(0.01,0.02,0.07), vec3(0.02,0.06,0.18), n * 0.6);

                    // Nebula glow
                    vec3 neb = mix(vec3(0.03,0.10,0.35), vec3(0.08,0.30,0.75), smoothstep(0.4,0.7,n));
                    neb = mix(neb, vec3(0.18,0.55,1.0), smoothstep(0.65,0.85,n));
                    col = mix(col, neb, n * 0.45);

                    // Aurora contributions
                    col += vec3(0.02,0.85,0.72) * b1 * sh1 * 0.28;
                    col += vec3(0.12,0.42,1.00) * b2 * sh2 * 0.22;
                    col += vec3(0.55,0.15,1.00) * b3 * sh3 * 0.18;

                    // Edge vignette
                    float vig = 1.0 - smoothstep(0.35, 0.85, length(uv));
                    col *= vig * 1.05;

                    // Ensure dark corners for depth
                    col = mix(col, vec3(0.01,0.02,0.06), smoothstep(0.6, 1.0, length(uv * vec2(0.9, 1.1))));

                    gl_FragColor = vec4(col, 1.0);
                }
            `,
        });
        const bgQuad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), bgMat);
        bgQuad.frustumCulled = false;
        bgScene.add(bgQuad);

        // ══════════════════════════════════════════
        //  LAYER 1 – CENTER STARS (gaussian cluster)
        // ══════════════════════════════════════════
        const STAR_N = 2000;
        const sPos = new Float32Array(STAR_N * 3);
        const sSz  = new Float32Array(STAR_N);
        const sPh  = new Float32Array(STAR_N);
        const sCol = new Float32Array(STAR_N * 3);
        const PAL  = [[0.56,0.78,1.],[0.75,0.88,1.],[1.,.97,.90],[0.60,0.85,1.],[0.85,0.92,1.],[0.38,0.68,1.]];

        for (let i = 0; i < STAR_N; i++) {
            const g  = Math.sqrt(-2 * Math.log(Math.max(Math.random(), 0.0001))) * Math.cos(2 * Math.PI * Math.random());
            const r  = THREE.MathUtils.clamp(Math.abs(g) * 48 + 18, 18, 200);
            const th = Math.random() * Math.PI * 2;
            const ph = Math.acos(2 * Math.random() - 1);
            sPos[i*3]   = r * Math.sin(ph) * Math.cos(th);
            sPos[i*3+1] = r * Math.sin(ph) * Math.sin(th);
            sPos[i*3+2] = r * Math.cos(ph);
            sSz[i]  = THREE.MathUtils.mapLinear(r, 18, 200, 0.62, 0.11);
            sPh[i]  = Math.random();
            const [cr,cg,cb] = PAL[Math.floor(Math.random() * PAL.length)] as number[];
            sCol[i*3]=cr; sCol[i*3+1]=cg; sCol[i*3+2]=cb;
        }

        const starGeo = new THREE.BufferGeometry();
        starGeo.setAttribute('position', new THREE.BufferAttribute(sPos, 3));
        starGeo.setAttribute('aSize',    new THREE.BufferAttribute(sSz,  1));
        starGeo.setAttribute('aPhase',   new THREE.BufferAttribute(sPh,  1));
        starGeo.setAttribute('color',    new THREE.BufferAttribute(sCol, 3));
        const starMat = new THREE.ShaderMaterial({
            transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, vertexColors: true,
            uniforms: { uTime: { value: 0 } },
            vertexShader: `
                attribute float aSize, aPhase; uniform float uTime; varying vec3 vC;
                void main(){
                    vC = color;
                    float tw = 0.55 + 0.45 * sin(uTime * 2.6 + aPhase * 6.2832);
                    vec4 mv = modelViewMatrix * vec4(position, 1.);
                    gl_PointSize = aSize * tw * (280. / -mv.z);
                    gl_Position  = projectionMatrix * mv;
                }
            `,
            fragmentShader: `
                varying vec3 vC;
                void main(){
                    float d = length(gl_PointCoord - 0.5) * 2.;
                    float a = 1. - smoothstep(0., .85, d); a *= a;
                    gl_FragColor = vec4(vC, a * .9);
                }
            `,
        });
        const starField = new THREE.Points(starGeo, starMat);
        scene.add(starField);

        // ══════════════════════════════════════════
        //  LAYER 2 – CENTRAL BLUE-SMOKE PLANET (original)
        // ══════════════════════════════════════════
        const planetGeo = new THREE.SphereGeometry(6.5, 256, 256);
        const planetMat = new THREE.ShaderMaterial({
            uniforms: {
                uTime:  { value: 0 },
                uLight: { value: new THREE.Vector3(14,16,24).normalize() },
            },
            vertexShader: `
                varying vec3 vN,vP,vW;
                void main(){
                    vN=normalize(normalMatrix*normal);
                    vec4 mv=modelViewMatrix*vec4(position,1.); vP=mv.xyz;
                    vW=(modelMatrix*vec4(position,1.)).xyz;
                    gl_Position=projectionMatrix*mv;
                }
            `,
            fragmentShader: `
                varying vec3 vN,vP,vW;
                uniform float uTime;
                uniform vec3 uLight;
                ${NOISE}

                // HSL to RGB helper
                vec3 hsl2rgb(float h, float s, float l){
                    float c=(1.-abs(2.*l-1.))*s;
                    float x=c*(1.-abs(mod(h*6.,2.)-1.));
                    float m=l-c*.5;
                    vec3 rgb;
                    if(h<1./6.)      rgb=vec3(c,x,0.);
                    else if(h<2./6.) rgb=vec3(x,c,0.);
                    else if(h<3./6.) rgb=vec3(0.,c,x);
                    else if(h<4./6.) rgb=vec3(0.,x,c);
                    else if(h<5./6.) rgb=vec3(x,0.,c);
                    else             rgb=vec3(c,0.,x);
                    return rgb+m;
                }

                void main(){
                    // ── Domain-warped smoke base (same structure, richer noise) ──
                    vec3 q=vW*0.55+vec3(uTime*.09,uTime*.065,0.);
                    float wx=sn(q), wy=sn(q+vec3(3.7,1.2,2.8));
                    vec3 wp=vW*1.1+vec3(wx,wy,0.)*.50
                           +vec3(uTime*.045,-uTime*.07,uTime*.035);

                    float n1=sn(wp*.55);
                    float n2=sn(wp*1.25+vec3(0.,uTime*.10,0.));
                    float n3=sn(wp*2.30-vec3(uTime*.05,0.,uTime*.08));
                    float n4=sn(wp*4.50+vec3(uTime*.12,uTime*.09,0.)); // fine shimmer

                    float sm = n1*.45+n2*.28+n3*.17+n4*.10;
                    float dt = n2*.50+n3*.35+n4*.15; // detail layer

                    // ── Animated hue: slowly shifts across deep blue spectrum ──
                    // base hue oscillates between blue(0.58) and violet(0.72)
                    float hueBase = 0.60 + 0.06*sin(uTime*0.08);
                    // local hue variation driven by smoke pattern
                    float hueVar  = sm*0.10 - 0.05;
                    float hue     = hueBase + hueVar;

                    // lightness: driven by smoke pattern for 3D depth feel
                    float lit = 0.06 + smoothstep(-0.6,0.7,sm)*0.40;

                    // saturation: brighter areas more saturated (glowing core effect)
                    float sat = 0.70 + smoothstep(0.2,0.8,dt)*0.25;

                    vec3 col = hsl2rgb(hue, sat, lit);

                    // ── Energy pulse waves (concentric rings radiating outward) ──
                    float dist = length(vW);
                    float wave1 = sin(dist*2.8 - uTime*1.2)*0.5+0.5;
                    float wave2 = sin(dist*5.5 - uTime*1.8 + 1.3)*0.5+0.5;
                    wave1 = pow(wave1, 4.0)*0.18;
                    wave2 = pow(wave2, 6.0)*0.10;
                    // pulse color: bright cyan-white energy
                    vec3 pulseCol = mix(vec3(0.20,0.55,1.0), vec3(0.70,0.90,1.0), wave1);
                    col = mix(col, pulseCol, (wave1+wave2)*smoothstep(-0.3,0.5,sm));

                    // ── Bright energy streaks (highlight veins) ──
                    float streak = pow(smoothstep(0.38,0.88,dt),2.5);
                    float streakHue = hueBase - 0.08; // slightly cooler
                    vec3 streakCol = hsl2rgb(streakHue, 1.0, 0.65);
                    col = mix(col, streakCol, streak*0.52);

                    // ── Diffuse lighting (key light + ambient) ──
                    vec3 N  = normalize(vN);
                    float diff = dot(N, uLight);
                    float term = smoothstep(-0.18, 0.28, diff);
                    // night side glows faintly (self-emission)
                    col = col*(0.18 + term*0.90);

                    // ── Specular (high-gloss energy surface) ──
                    vec3 vd = normalize(-vP);
                    vec3 H  = normalize(uLight + vd);
                    float spec = pow(max(dot(N,H),0.), 80.) * term;
                    col += vec3(0.55, 0.82, 1.0)*spec*0.8;

                    // ── Animated multi-tone Fresnel rim ──
                    float NdV = max(dot(N,vd), 0.);
                    float fr1 = pow(1.-NdV, 2.5);
                    float fr2 = pow(1.-NdV, 5.0);
                    // rim hue pulses between azure and violet
                    float rimHue = 0.62 + 0.10*sin(uTime*0.18);
                    vec3 rimCol1 = hsl2rgb(rimHue,       1.0, 0.58);
                    vec3 rimCol2 = hsl2rgb(rimHue+0.05,  1.0, 0.72);
                    col += rimCol1 * fr1 * 1.6;
                    col += rimCol2 * fr2 * 1.0;

                    // ── Subtle depth darkening toward core ──
                    col *= 1.0 - length(vP)*0.008;

                    gl_FragColor = vec4(col, 1.0);
                }
            `,
        });
        const planet = new THREE.Mesh(planetGeo, planetMat);
        scene.add(planet);




        // Outer glow halo sprite
        const glowTex = new THREE.TextureLoader().load(
            'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/sprites/glow.png'
        );
        const haloMat = new THREE.SpriteMaterial({ map: glowTex, color: 0x3b82f6, transparent: true, opacity: 0.38, blending: THREE.AdditiveBlending });
        const halo = new THREE.Sprite(haloMat);
        halo.scale.set(32, 32, 1);
        scene.add(halo);
        // Removed unused dummy materials

        // ══════════════════════════════════════════
        //  LAYER 3 – ORBITING MOONS
        // ══════════════════════════════════════════
        const MOON_DATA = [
            { size: 0.55, dist: 14, speed: 0.008, color: 0xdbeafe, glow: 0x93c5fd, tilt: 0.18 },
            { size: 0.85, dist: 22, speed: 0.005, color: 0xbfdbfe, glow: 0x60a5fa, tilt: -0.12 },
            { size: 0.70, dist: 31, speed: 0.0035, color: 0xe0f2fe, glow: 0x7dd3fc, tilt: 0.25 },
        ];
        const moons: { mesh: THREE.Mesh; sprite: THREE.Sprite; dist: number; speed: number; angle: number; tilt: number }[] = [];
        MOON_DATA.forEach((md, i) => {

            const moonMat = new THREE.ShaderMaterial({
                uniforms:{
                    uLight:{ value: new THREE.Vector3(14,16,24).normalize() },
                    uColor:{ value: new THREE.Color(md.color) },
                    uGlow: { value: new THREE.Color(md.glow) },
                    uSeed: { value: i * 3.71 },
                    uTime: { value: 0 },
                },
                vertexShader:`
                    varying vec3 vN,vP,vW;
                    void main(){
                        vN=normalize(normalMatrix*normal);
                        vec4 mv=modelViewMatrix*vec4(position,1.); vP=mv.xyz;
                        vW=(modelMatrix*vec4(position,1.)).xyz;
                        gl_Position=projectionMatrix*mv;
                    }
                `,
                fragmentShader:`
                    varying vec3 vN,vP,vW;
                    uniform vec3 uLight,uColor,uGlow;
                    uniform float uSeed,uTime;
                    ${NOISE}
                    void main(){
                        // rocky surface via FBM
                        vec3 p=vW*2.2+uSeed;
                        float wx=fbm(p); float wy=fbm(p+vec3(2.3,5.1,1.7));
                        vec3 wp=p+vec3(wx,wy,0.)*0.3;
                        float rock=fbm(wp*1.8)*0.5+0.5;
                        float detail=fbm(wp*4.5+uSeed)*0.5+0.5;

                        // crater-like depressions: dark rings
                        float cr1=length(fract(vW*1.4+uSeed)-.5);
                        float cr2=length(fract(vW*2.1+uSeed+1.3)-.5);
                        float crater=smoothstep(0.22,0.18,cr1)*0.5+smoothstep(0.16,0.13,cr2)*0.3;

                        // surface color: dusty blue-grey rock
                        vec3 rockDark =uColor*0.25;
                        vec3 rockMid  =uColor*0.65;
                        vec3 rockLight=mix(uColor,vec3(0.85,0.92,1.0),0.4);
                        vec3 col=rockDark;
                        col=mix(col,rockMid,  smoothstep(0.30,0.55,rock));
                        col=mix(col,rockLight,smoothstep(0.55,0.78,rock));
                        // fine detail brightening
                        col=mix(col,col*1.25,smoothstep(0.60,0.85,detail)*0.5);
                        // crater darkening
                        col=mix(col,col*0.35,crater);

                        // diffuse lighting with soft terminator
                        vec3 N=normalize(vN);
                        float diff=dot(N,uLight);
                        float term=smoothstep(-0.10,0.20,diff);
                        col*=0.06+term*1.0;

                        // specular highlight (rocky = low gloss)
                        vec3 vd=normalize(-vP);
                        vec3 H=normalize(uLight+vd);
                        float spec=pow(max(dot(N,H),0.),18.)*term*(1.-crater);
                        col+=vec3(0.70,0.88,1.0)*spec*0.28;

                        // atmospheric rim glow (thin)
                        float fr=pow(1.-max(dot(N,vd),0.),3.8);
                        col+=uGlow*fr*0.55;

                        // subsurface glow on night side edge
                        float sss=pow(max(-diff+0.05,0.),2.0)*0.12;
                        col+=uGlow*sss;

                        gl_FragColor=vec4(col,1.);
                    }
                `,
            });
            const mesh = new THREE.Mesh(new THREE.SphereGeometry(md.size, 64, 64), moonMat);
            scene.add(mesh);

            const sprite = new THREE.Sprite(
                new THREE.SpriteMaterial({ map: glowTex, color: md.glow, transparent: true, opacity: 0.35, blending: THREE.AdditiveBlending })
            );
            sprite.scale.set(md.size * 5, md.size * 5, 1);
            scene.add(sprite);

            moons.push({ mesh, sprite, dist: md.dist, speed: md.speed, angle: (i / MOON_DATA.length) * Math.PI * 2, tilt: md.tilt });
        });



        // ══════════════════════════════════════════
        //  ANIMATION LOOP
        // ══════════════════════════════════════════
        // Eased camera state
        const camTarget = new THREE.Vector3();
        const camCurrent = new THREE.Vector3(0, 10, 50);
        let t = 0;
        const animate = () => {
            t += 0.005;



            // BG aurora
            bgMat.uniforms.uTime.value = t;

            // Planet – smooth Y spin, preserve axial tilt
            planetMat.uniforms.uTime.value = t;
            planet.rotation.y = t * 0.009;
            planet.rotation.x = 0;

            haloMat.opacity = 0.30 + Math.sin(t * 0.50) * 0.08;

            // Moons – elliptical orbit + tick surface shader time
            moons.forEach(m => {
                m.angle += m.speed;
                const x = Math.cos(m.angle) * m.dist;
                const z = Math.sin(m.angle) * m.dist * 0.82;
                const y = Math.sin(m.angle * 2) * 1.2 + m.dist * Math.sin(m.tilt) * 0.15;
                m.mesh.position.set(x, y, z);
                m.mesh.rotation.y += 0.006;
                m.mesh.rotation.x += 0.002;
                // tick FBM surface time so clouds/shimmer animate
                const mat = m.mesh.material as THREE.ShaderMaterial;
                if (mat.uniforms?.uTime) mat.uniforms.uTime.value = t;
                m.sprite.position.set(x, y, z);
                // sprite breathe
                (m.sprite.material as THREE.SpriteMaterial).opacity =
                    0.28 + Math.sin(t * 0.8 + m.angle) * 0.10;
            });

            // Stars slow drift
            starMat.uniforms.uTime.value = t;
            starField.rotation.y = t * 0.0006;
            starField.rotation.x = Math.sin(t * 0.05) * 0.008;

            // Eased cinematic camera (lerp toward sinusoidal target)
            camTarget.set(
                Math.sin(t * 0.035) * 4.5,
                10 + Math.sin(t * 0.048) * 2.2,
                50 + Math.cos(t * 0.040) * 3.5
            );
            camCurrent.lerp(camTarget, 0.012); // very smooth ease
            camera.position.copy(camCurrent);
            camera.lookAt(0, 0, 0);

            // Render BG first (no depth clear), then foreground
            renderer.autoClear = false;
            renderer.clear();
            renderer.render(bgScene, bgCamera);
            renderer.render(scene, camera);

            animationIdRef.current = requestAnimationFrame(animate);
        };
        animate();

        const onResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, window.innerWidth < 768 ? 1.5 : 2));
        };
        window.addEventListener('resize', onResize);

        return () => {
            window.removeEventListener('resize', onResize);
            if (animationIdRef.current) cancelAnimationFrame(animationIdRef.current);
            if (el.contains(renderer.domElement)) el.removeChild(renderer.domElement);
            renderer.dispose();
        };
    }, []);

    return (
        <div className="fixed inset-0 overflow-hidden z-0">
            <div ref={containerRef} className="absolute inset-0" />
            {/* Soft center-bright vignette keeps planet readable */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,transparent_20%,rgba(2,8,18,0.45)_70%,rgba(2,8,18,0.88)_100%)] pointer-events-none" />
            <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#020812] to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#020812] to-transparent pointer-events-none" />
        </div>
    );
}
