<script>
  import { onMount } from "svelte";
  import DegradedText from "../../../components/DegradedText.svelte";
  import gsap from "gsap";

  let isOpen = false;

  function toggleMenu() {
    isOpen = !isOpen;
    if (isOpen) {
      gsap.fromTo(".nav-right", 
        { clipPath: "circle(0% at 90% 10%)", opacity: 0 },
        { clipPath: "circle(150% at 90% 10%)", opacity: 1, duration: 0.8, ease: "power3.out" }
      );
    }
  }

  onMount(() => {
    gsap.from("nav", {
      opacity: 0,
      y: -20,
      duration: 1,
      ease: "power3.out",
      delay: 0.5
    });
  });
</script>

<nav>
  <div class="nav-left">
    <img src="/logo.svg" alt="logo" class="logo" />
    <DegradedText text="Tarsiux" sizeFont="clamp(1.2rem, 4vw, 1.8rem)" />
  </div>

  <button class="hamburger {isOpen ? 'open' : ''}" on:click={toggleMenu} aria-label="Menu">
    <span></span>
    <span></span>
    <span></span>
  </button>

  <ul class="nav-right {isOpen ? 'active' : ''}">
    <a href="#experiencia" on:click={() => isOpen = false}><li>Experiencia</li></a>
    <a href="#proyectos" on:click={() => isOpen = false}><li>Proyectos</li></a>
    <a href="#sobre-mi" on:click={() => isOpen = false}><li>Sobre mi</li></a>
  </ul>
</nav>

<style>
  nav {
    width: 100%;
    height: 70px;
    padding: 0 clamp(1rem, 5vw, 3rem);
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    z-index: 1000;
    box-sizing: border-box;
    background: rgba(var(--color-n1-rgb, 0, 0, 0), 0.1);
    backdrop-filter: blur(10px);
  }

  .nav-left {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .logo {
    width: clamp(30px, 5vw, 40px);
  }

  .nav-right {
    display: flex;
    list-style: none;
    gap: 22px;
    margin: 0;
    padding: 0;
    transition: opacity 0.3s ease;
  }

  @container (max-width: 700px) { }
  

  @media (max-width: 768px) {
    .hamburger {
      display: flex !important;
    }

    .nav-right {
      position: fixed;
      top: 0;
      right: 0;
      width: 100%;
      height: 100vh;
      background: var(--color-n1);
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 40px;
      display: none;
      z-index: -1;
    }

    .nav-right.active {
      display: flex;
    }
  }

  .hamburger {
    display: none;
    flex-direction: column;
    justify-content: space-between;
    width: clamp(30px, 5vw, 40px);
    height: 18px;
    background: none;
    border: none;
    cursor: pointer;
    z-index: 1001;
    padding: 0;
  }

  .hamburger span {
    width: 100%;
    height: 3px;
    background-color: var(--color-p);
    border-radius: 10px;
    transition: all 0.3s ease;
  }

  .hamburger.open span:nth-child(1) { transform: translateY(9px) rotate(45deg); }
  .hamburger.open span:nth-child(2) { opacity: 0; }
  .hamburger.open span:nth-child(3) { transform: translateY(-9px) rotate(-45deg); }

  .nav-right a {
    text-decoration: none;
    color: var(--color-a1);
    font-size: clamp(1.2rem, 5vw, 1.5rem);
    font-weight: 500;
  }

  .nav-right a:hover {
    color: var(--color-p);
  }
</style>