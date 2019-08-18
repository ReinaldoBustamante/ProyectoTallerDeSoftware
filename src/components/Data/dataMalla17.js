const malla_2017 =

[
  {
    num_sem: 1,
    ramos:
    [
      {
        id: 0,
        codigo: "BAIN065-14",
        nombre: "Álgebra para ingeniería",
        creditos: 6,
        requisitos: [],
        sem: 1,
        tasa_repr: 0.551811288963774
      },
      {
        id: 1,
        codigo: "BAIN067-14",
        nombre: "Geometría para ingeniería",
        creditos: 6,
        requisitos: [],
        sem: 1,
        tasa_repr: 0.561779242174629
      },
      {
        id: 2,
        codigo: "BAIN071-14",
        nombre: "Comunicación idioma español",
        creditos: 4,
        requisitos: [],
        sem: 1,
        tasa_repr: 0.0621039290240811
      },
      {
        id: 3,
        codigo: "INFO063-17",
        nombre: "Introducción a la programación",
        creditos: 6,
        requisitos: [],
        sem: 1,
        tasa_repr: 0.370165745856354
      },
      {
        id: 4,
        codigo: "INFO073-17",
        nombre: "Taller de ingeniería: Introducción a la profesión",
        creditos: 4,
        requisitos: [],
        sem: 1,
        tasa_repr: 0.0212765957446809
      },

    ]
  },
  {
    num_sem: 2,
    ramos:
    [
      {
        id:5,
        codigo: "BAIN069-14",
        nombre: "Quimica para ingeniería",
        creditos: 4,
        requisitos: [],
        sem: 2,
        tasa_repr: 0.298206278026906
      },
      {
        id:6,
        codigo: "BAIN073-14",
        nombre: "Algebra lineal para ingeniería",
        creditos: 5,
        requisitos: ["Álgebra para ingeniería"],
        sem: 2,
        tasa_repr: 0.565508021390374
      },
      {
        id:7,
        codigo: "BAIN075-14",
        nombre: "Cálculo en una varible",
        creditos: 5,
        requisitos: ["Álgebra para ingeniería", "Geometría para ingeniería"],
        sem: 2,
        tasa_repr: 0.529331514324693
      },
      {
        id:8,
        codigo: "BAIN079-14",
        nombre: "Comunicación idioma ingles",
        creditos: 4,
        requisitos: [],
        sem: 2,
        tasa_repr: 0.167369901547117
      },
      {
        id:9,
        codigo: "DYRE070-14",
        nombre: "Educación fisica y salud",
        creditos: 4,
        requisitos: [],
        sem: 2,
        tasa_repr: 0
      },
      {
        id:10,
        codigo: "INFO081-17",
        nombre: "Programación",
        creditos: 6,
        requisitos: ["Introducción a la programación"],
        sem: 2,
        tasa_repr: 0.305785123966942
      },
      {
        codigo: "INFO083-17",
        nombre: "Taller de ingeniería: Programación aplicada",
        creditos: 4,
        requisitos: ["Taller de ingeniería: Introducción a la profesión", "Introducción a la programación", "Comunicación idioma español"],
        sem: 2,
        tasa_repr: 0.0849056603773585
      },

    ]
  },

  {
    num_sem: 3,
    ramos:
    [
      {
        codigo: "BAIN077-14",
        nombre: "Física: Mecánica",
        creditos: 8,
        requisitos: ["Geometría para ingeniería", "Álgebra para ingeniería"],
        sem: 3,
        tasa_repr: 0.46617915904936
      },
      {
        codigo: "BAIN081-14",
        nombre: "Ecuaciones diferenciales para ingeniería",
        creditos: 5,
        requisitos: ["Algebra lineal para ingeniería", "Calculo en una variable"],
        sem: 3,
        tasa_repr: 0.527272727272727
      },
      {
        codigo: "BAIN083-14",
        nombre: "Calculo en varias variables",
        creditos: 5,
        requisitos: ["Calculo en una variable"],
        sem: 3,
        tasa_repr: 0.648
      },
      {
        codigo: "ELECT12",
        nombre: "Ofg 1",
        creditos: 0,
        requisitos: [],
        sem: 3,
        tasa_repr: ""
      },
      {
        codigo: "INFO085-17",
        nombre: "Estructuras de datos y algoritmos",
        creditos: 6,
        requisitos: ["Programación"],
        sem: 3,
        tasa_repr: 0.691176470588235
      },
      {
        codigo: "INFO088-17",
        nombre: "Taller de ingeniería: Estructuras de datos y algoritmos",
        creditos: 4,
        requisitos: ["Programación", "Taller de ingeniería: Programación aplicada"],
        sem: 3,
        tasa_repr: 0.155172413793103
      },

    ]
  },

  {
    num_sem: 4,
    ramos:
    [
      {
        codigo: "BAIN085-14",
        nombre: "Física: Ondas y electromagnetismo",
        creditos: 8,
        requisitos: ["Calculo en una variable", "Fisica: Mecanica"],
        sem: 4,
        tasa_repr: 0.230434782608696
      },
      {
        codigo: "BAIN087-14",
        nombre: "Métodos numericos para ingeniería",
        creditos: 4,
        requisitos: ["Ecuaciones diferenciales para ingeniería"],
        sem: 4,
        tasa_repr: 0.497206703910615
      },
      {
        codigo: "BAIN091-14",
        nombre: "Estadistica y probabilidades para ingeniería",
        creditos: 4,
        requisitos: ["Álgebra lineal para ingeniería"],
        sem: 4,
        tasa_repr: 0.329896907216495
      },
      {
        codigo: "INFO090-17",
        nombre: "Programación orientada a objetos",
        creditos: 5,
        requisitos: ["Programación"],
        sem: 4,
        tasa_repr: 0.129032258064516
      },
      {
        codigo: "INFO099-17",
        nombre: "Estructuras discretas",
        creditos: 6,
        requisitos: ["Álgebra lineal para ingeniería"],
        sem: 4,
        tasa_repr: 0.393939393939394
      },
      {
        codigo: "INFO104-17",
        nombre: "Taller de construcción de software",
        creditos: 4,
        requisitos: ["Estructuras de datos y algoritmos, Taller de ingeniería: Estructuras de datos y algoritmos"],
        sem: 4,
        tasa_repr: 0.037037037037037
      },

    ]
  },

  {
    num_sem: 5,
    ramos:
    [
      {
        codigo: "BAIN140-17",
        nombre: "Inglés instrumental",
        creditos: 4,
        requisitos: ["Comunicación idioma ingles"],
        sem: 5,
        tasa_repr: 0.43
      },
      {
        codigo: "EICI146-17",
        nombre: "Práctica inicial",
        creditos: 4,
        requisitos: ["Todos los anteriores"],
        sem: 5,
        tasa_repr: 0.21
      },
      {
        codigo: "ELECT100",
        nombre: "Optativo de especialización I",
        creditos: 0,
        requisitos: [],
        sem: 5,
        tasa_repr: 0.56
      },
      {
        codigo: "INFO128-17",
        nombre: "Arquitectura de computadores",
        creditos: 5,
        requisitos: ["Quimica para ingeniería", "Estructuras de datos y algoritmos", "Introducción a la programación"],
        sem: 5,
        tasa_repr: 0.77
      },
      {
        codigo: "INFO133-17",
        nombre: "Base de datos",
        creditos: 6,
        requisitos: ["Taller de construcción de software"],
        sem: 5,
        tasa_repr: 0.21
      },
      {
        codigo: "INFO139-17",
        nombre: "Teoría de autómatas",
        creditos: 6,
        requisitos: ["Taller de ingeniería: Estucturas de datos y algoritmos", "Estructuras discretas"],
        sem: 5,
        tasa_repr: 0.49
      },
      {
        codigo: "INFO145-17",
        nombre: "Diseño y análisis de algoritmos",
        creditos: 4,
        requisitos: ["Estadística y probabilidades para ingeniería", "Estructuras de datos y algoritmos", "Estructuras discretas"],
        sem: 5,
        tasa_repr: 0.78
      },

    ]
  },

  {
    num_sem: 6,
    ramos:
    [
      {
        codigo: "BAIN150-17",
        nombre: "Inglés funcional",
        creditos: 4,
        requisitos: ["Inglés instrumental"],
        sem: 6,
        tasa_repr: 0.11
      },
      {
        codigo: "INFO188-17",
        nombre: "Programación en paradigmas funcional y paralelo",
        creditos: 4,
        requisitos: ["Programación orientada a objetos", "Taller de construcción de software"],
        sem: 6,
        tasa_repr: 0.09
      },
      {
        codigo: "INFO198-17",
        nombre: "Sistemas Operativos",
        creditos: 6,
        requisitos: ["Taller de ingeniería: Estructuras de datos y algoritmos", "Arquitectura de computadores"],
        sem: 6,
        tasa_repr: 0.44
      },
      {
        codigo: "INFO200-17",
        nombre: "Investigación operativa",
        creditos: 8,
        requisitos: ["Álgebra lineal", "Taller de ingeniería: Programación aplicada", "Calculo en varias variables", "Estadística y probabilidades para ingeniería"],
        sem: 6,
        tasa_repr: 0.74
      },
      {
        codigo: "INFO208-17",
        nombre: "Ingeniería de requisitos",
        creditos: 4,
        requisitos: ["Taller de construcción de software"],
        sem: 6,
        tasa_repr: 0.24
      },
      {
        codigo: "INFO229-17",
        nombre: "Arquitectura de requisitos",
        creditos: 4,
        requisitos: ["Base de datos"],
        sem: 6,
        tasa_repr: 0.14
      },
    ]
  },

  {
    num_sem: 7,
    ramos:
    [
      {
        codigo: "EICI223-17",
        nombre: "Gestión organizacional",
        creditos: 4,
        requisitos: ["Cálculo en varias variables", "Taller de ingeniería: Programación aplicada", "Taller de construcción de software"],
        sem: 7,
        tasa_repr: 0.31
      },
      {
        codigo: "ELECT101",
        nombre: "Optativo de especialización",
        creditos: 0,
        requisitos: [],
        sem: 7,
        tasa_repr: 0.12
      },
      {
        codigo: "INFO239-17",
        nombre: "Comunicaciones",
        creditos: 6,
        requisitos: ["Teoría de autómatas, Sistemas operativos"],
        sem: 7,
        tasa_repr: 0.22
      },
      {
        codigo: "INFO245-17",
        nombre: "Interacción Humano - Computador",
        creditos: 4,
        requisitos: ["Ingeniería de requisitos", "Ingles funcional"],
        sem: 7,
        tasa_repr: 0.28
      },
      {
        codigo: "INFO248-17",
        nombre: "Ingeniería de software",
        creditos: 5,
        requisitos: ["Ingeniería de requisitos", "Arquitectura de requisitos"],
        sem: 7,
        tasa_repr: 0.51
      },
      {
        codigo: "INFO257-17",
        nombre: "Inteligencia artificial",
        creditos: 6,
        requisitos: ["Programación en paradigmas funcional y paralelo", "Diseño y análisis de algoritmos"],
        sem: 7,
        tasa_repr: 0.64
      },
    ]
  },

  {
    num_sem: 8,
    ramos:
    [
      {
        codigo: "ELECT111",
        nombre: "Optativo de especialización II",
        creditos: 0,
        requisitos: [],
        sem: 8,
        tasa_repr: 0.33
      },
      {
        codigo: "INFO270-17",
        nombre: "Evaluación de proyectos informáticos",
        creditos: 5,
        requisitos: ["Investigación operativa", "Gestión organizacional", "Ingeniería de software"],
        sem: 8,
        tasa_repr: 0.1
      },
      {
        codigo: "INFO276-17",
        nombre: "Redes",
        creditos: 6,
        requisitos: ["Comunicaciones"],
        sem: 8,
        tasa_repr: 0.06
      },
      {
        codigo: "INFO278-17",
        nombre: "Sistemas de información",
        creditos: 6,
        requisitos: ["Gestión organizacional", "Ingeniería de software"],
        sem: 8,
        tasa_repr: 0.02
      },
      {
        codigo: "INFO280-17",
        nombre: "Seminario de ética profesional",
        creditos: 2,
        requisitos: ["Gestión organizacional"],
        sem: 8,
        tasa_repr: 0.091
      },
      {
        codigo: "INFO282-17",
        nombre: "Taller de ingeniería de software",
        creditos: 7,
        requisitos: ["Interacción Humano - Computador", "Ingeniería de software"],
        sem: 8,
        tasa_repr: 0.032
      },
    ]
  },

  {
    num_sem: 9,
    ramos:
    [
      {
        codigo: "EICI270-17",
        nombre: "Taller de emprendimiento",
        creditos: 6,
        requisitos: ["Evaluación de proyectos informáticos"],
        sem: 9,
        tasa_repr: 0.001
      },
      {
        codigo: "ELECT112",
        nombre: "Optativo de profundización",
        creditos: 0,
        requisitos: [],
        sem: 9,
        tasa_repr: 0.35
      },
      {
        codigo: "INFO286-17",
        nombre: "Sistemas de gestión",
        creditos: 5,
        requisitos: ["Evaluación de proyectos informáticos", "Sistemas de información"],
        sem: 9,
        tasa_repr: 0.021
      },
      {
        codigo: "INFO288-17",
        nombre: "Sistemas distribuidos",
        creditos: 4,
        requisitos: ["Sistemas operativos"],
        sem: 9,
        tasa_repr: 0.0034
      },
      {
        codigo: "INFO289-17",
        nombre: "Taller de integración de tecnología de Información y Comunicación",
        creditos: 6,
        requisitos: ["Taller de construcción de software", "Redes"],
        sem: 9,
        tasa_repr: 0.098
      },
      {
        codigo: "INFO290-17",
        nombre: "Métodos y modelos de ingeniería de software",
        creditos: 4,
        requisitos: ["Taller de ingeniería de software"],
        sem: 9,
        tasa_repr: 0.025
      },
    ]
  },

  {
    num_sem: 10,
    ramos:
    [
      {
        codigo: "ELECT116",
        nombre: "Optativo de profundización II",
        creditos: 0,
        requisitos: [],
        sem: 10,
        tasa_repr: 0.21
      },
      {
        codigo: "INFO293-17",
        nombre: "Tecnología de información para la gestión organizacional",
        creditos: 6,
        requisitos: ["Sistemas de gestión", "Seminario de ética profesional"],
        sem: 10,
        tasa_repr: 0.31
      },
      {
        codigo: "INFO294-17",
        nombre: "Realidad tecnológica nacional",
        creditos: 4,
        requisitos: ["Todos los ramos anteriores"],
        sem: 10,
        tasa_repr: 0.36
      },
      {
        codigo: "INFO297-17",
        nombre: "Taller de titulo",
        creditos: 6,
        requisitos: ["Sistemas de gestión, Taller de tecnología de información y comunicación", "Métodos y modelos de ingeniería de software"],
        sem: 10,
        tasa_repr: 0.032
      },
    ]
  },
  {
    num_sem: 11,
    ramos:
    [
      {
        codigo: "INFO295-17",
        nombre: "Practica profesional (a) y (b)",
        creditos: 28,
        requisitos: ["Todos los ramos anteriores"],
        sem: 11,
        tasa_repr: 0.021
      },
      {
        codigo: "INFO298-17",
        nombre: "Proyecto de titulo: Articulo de investigación (b)",
        creditos: 6,
        requisitos: ["Taller de titulo"],
        sem: 11,
        tasa_repr: 0.01
      },
      {
        codigo: "INFO299-17",
        nombre: "Proyecto de titulo: Memoria (a)",
        creditos: 6,
        requisitos: ["Taller de titulo"],
        sem: 11,
        tasa_repr: 0.001
      }
    ]
  },

];
export default malla_2017;
