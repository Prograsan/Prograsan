window.onload = () => {
    let links = document.querySelectorAll('.link')
    
    let tercero = links[0]
    tercero.addEventListener('click', () => {
      scrollSuave('#banner', 500, 81)
    })

    let primero = links[1]
    primero.addEventListener('click', () => {
      scrollSuave('#Proyectooss', 500, 80)
    })

    let segundo = links[2]
    segundo.addEventListener('click', () => {
      scrollSuave('#_Footer_', 500, 82)
    })

  }
  
  
  const scrollSuave = (objetivo, duracion, compensacion) => {
    let elemObj = document.querySelector(objetivo)
    let elemPos = elemObj.getBoundingClientRect().top - compensacion
    let posInicial = window.pageYOffset
    let tiempoInicial = null
  
    const animacion = tiempoAhora => {
      if (tiempoInicial === null) tiempoInicial = tiempoAhora
      tiempoPasado = tiempoAhora - tiempoInicial
      let auxAnimacion = easeInOutQuad(tiempoPasado, posInicial, elemPos, duracion)
      window.scrollTo(0, auxAnimacion)
      if (tiempoPasado < duracion) requestAnimationFrame(animacion)
    }
    requestAnimationFrame(animacion)
  }
  
  const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2
    if (t < 1) return c / 2 * t * t + b
    t--
    return - c / 2 * (t * (t - 2) - 1) + b
  }