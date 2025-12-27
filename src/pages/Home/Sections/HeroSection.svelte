<script>
  import { onMount } from "svelte";
  import DegradedText from "../../../components/DegradedText.svelte";
  import gsap from "gsap";

  onMount(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power3.out" }
    });

    tl.to(".background", {
      '--spread-top': '35%',
      '--spread-bottom': '35%',
      duration: 4
    })
    .from(".title-container", {
      opacity: 0,
      letterSpacing: "-0.5rem",
      duration: 2
    }, "-=3.8")
    .from(".profession", {
      opacity: 0,
      y: 30,
      duration: 1.5
    }, "-=3.2")
    .from(".btn-group", {
      opacity: 0,
      y: 20,
      filter: "blur(10px)",
      duration: 1.5
    }, "-=2.5")
    .from(".arrow", {
      opacity: 0,
      duration: 1.5
    }, "-=1.5");

    return () => tl.kill();
  });
</script>

<header class="background">
  <div class="title-container">
    <DegradedText text="Tarsiux" sizeFont="clamp(3.5rem, 15vw, 12rem)"/>
  </div>
  
  <h2 class="profession">Desarrollador Junior</h2>

  <div class="btn-group">
    <button class="button" type="button">
      <span class="button__text">Descargar CV</span>
      <span class="button__icon">
        <svg class="svg">
          <use xlink:href="/sprites.svg#download"></use>
        </svg>
      </span>
    </button>

    <div class="social-wrapper">
      <a href="https://www.linkedin.com/in/sergio-trujillo-jerez/" target="_blank">
        <svg class="social">
          <use xlink:href="/sprites.svg#linkedin"></use>
        </svg>
      </a>
      <a href="https://github.com/Tarsiux/Tarsiux" target="_blank">
        <svg class="social">
          <use xlink:href="/sprites.svg#github"></use>
        </svg>
      </a>
    </div>
  </div>

  <svg class="arrow">
    <use xlink:href="/sprites.svg#down-arrow"></use>
  </svg>
</header>

<style>
  .background {
    --spread-top: 0%;    
    --spread-bottom: 0%;
    position: relative;
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 2rem;
    box-sizing: border-box;
    background-color: var(--color-n1);
    background-image:
      radial-gradient(
        circle at 0% 100%,
        rgba(170, 133, 255, 0.3) 0%,
        rgba(170, 133, 255, 0.15) calc(var(--spread-bottom) * 0.45),
        rgba(170, 133, 255, 0) var(--spread-bottom)
      ),
      radial-gradient(
        circle at 100% 0%,
        rgba(170, 133, 255, 0.3) 0%,
        rgba(170, 133, 255, 0.15) calc(var(--spread-top) * 0.45),
        rgba(170, 133, 255, 0) var(--spread-top)
      );
    background-repeat: no-repeat;
    text-align: center;
    overflow: hidden;
  }

  .title-container {
    max-width: 100%;
    will-change: letter-spacing, opacity;
  }
  
  .profession {
    margin-top: clamp(0.5rem, 2vh, 1.5rem);
    font-size: clamp(1.25rem, 4vw, 2.5rem);
    color: var(--color-a1);
    will-change: transform, opacity;
  }

  .btn-group {
    margin-top: clamp(1.5rem, 5vh, 3rem);
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: clamp(1rem, 3vw, 2rem);
    width: 100%;
    max-width: 600px;
  }

  .social-wrapper {
    display: flex;
    gap: 1.5rem;
    align-items: center;
  }

  .button {
    position: relative;
    width: 170px;
    height: 40px;
    cursor: pointer;
    display: flex;
    align-items: center;
    border: 2px solid var(--color-n3);
    background-color: var(--color-n2);
    border-radius: 10px;
    font-size: 1rem;
    overflow: hidden;
    flex-shrink: 0;
  }

  .button .button__text {
    transform: translateX(8px);
    color: var(--color-a1);
    font-weight: 600;
    transition: all 0.3s;
  }

  .button .button__icon {
    position: absolute;
    transform: translateX(124px);
    height: 100%;
    width: 39px;
    background-color: var(--color-p);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s;
  }

  .button .svg {
    width: 20px;
    fill: var(--color-n1);
  }

  .button:hover .button__icon {
    width: 100%;
    background-color: var(--color-a2);
    transform: translateX(0);
  }

  .social {
    width: clamp(28px, 5vw, 32px);
    height: clamp(28px, 5vw, 32px);
    fill: var(--color-p);
    transition: fill 0.3s;
  }

  .social:hover {
    fill: var(--color-a2);
  }

  .arrow {
    position: absolute;
    fill: var(--color-p);
    bottom: clamp(1rem, 5vh, 2rem);
    left: 50%;
    transform: translateX(-50%);
    width: clamp(35px, 7vw, 52px);
    height: clamp(35px, 7vw, 52px);
    animation: bounce 1.5s infinite ease-in-out;
    pointer-events: none;
  }

  @keyframes bounce {
    0%, 100% { transform: translate(-50%, 0); }
    50% { transform: translate(-50%, -12px); }
  }
</style>