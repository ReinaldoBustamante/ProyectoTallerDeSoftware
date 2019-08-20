const malla_obras_2001 =
[
  {
      num_sem: 1,
      ramos:
      [
        {
          "codigo": "IDMI052-90",
          "nombre": "Taller de Formación I",
          "creditos": 2,
          "creditosSCT": 0,
          "carrera": 1704,
          "sem": 1,
          "requisitos": [],
          "optativo": 0,
          "tasa_repr": 0.02
        },
        {
          "codigo": "IDMI127-90",
          "nombre": "Geometría descriptiva I",
          "creditos": 6,
          "creditosSCT": 0,
          "carrera": 1704,
          "sem": 1,
          "requisitos": [],
          "optativo": 0,
          "tasa_repr": 0.04
        },
        {
          "codigo": "MATM072-01",
          "nombre": "Geometría para ingeniería",
          "creditos": 6,
          "creditosSCT": 0,
          "carrera": 1704,
          "carrera_nombre": "INGENIERÍA CIVIL EN OBRAS CIVILES",
          "malla": 2001,
          "sem": 1,
          "requisitos": [],
          "optativo": 0,
          "tasa_repr": 0.31
        },
        {
          "codigo": "QUIM170-90",
          "nombre": "Quimica general",
          "creditos": 6,
          "creditosSCT": 0,
          "carrera": 1704,
          "sem": 1,
          "requisitos": [],
          "optativo": 0,
          "tasa_repr": 0.1121
        },
        {
          "codigo": "MATM071-01",
          "nombre": "Algebra e introducción al calculo",
          "creditos": 8,
          "creditosSCT": 0,
          "carrera": 1704,
          "sem": 1,
          "requisitos": [],
          "optativo": 0,
          "tasa_repr": 0.045
        },
      ]


  },
  {
      num_sem:2,
      ramos:
      [
        {


          "codigo": "DYRE060-90",
          "nombre": "Educación fisica y salud",
          "creditos": 4,
          "creditosSCT": 0,
          "carrera": 1704,
          "sem": 2,
          "requisitos": [],
          "optativo": 0,
          "tasa_repr": 0
        },
        {
          "codigo": "IDMI224-90",
          "nombre": "Geometría descriptiva II",
          "creditos": 6,
          "creditosSCT": 0,
          "malla": 2001,
          "sem": 2,
          "requisitos": ["Geometría descriptiva I"],
          "optativo": 0,
          "tasa_repr": 0.45
        },
        {
          "codigo": "MATM073-01",
          "nombre": "Cálculo en una variable",
          "creditos": 6,
          "creditosSCT": 0,
          "carrera": 1704,
          "carrera_nombre": "INGENIERÍA CIVIL EN OBRAS CIVILES",
          "malla": 2001,
          "sem": 2,
          "requisitos": ["Algebra e introducción al calculo"],
          "optativo": 0,
          "tasa_repr": 0.39
        },
        {
          "codigo": "MATM074-01",
          "nombre": "Álgebra lineal",
          "creditos": 6,
          "creditosSCT": 0,
          "malla": 2001,
          "sem": 2,
          "requisitos": ["Algebra e introducción al calculo","Geometría para ingeniería"],
          "optativo": 0,
          "tasa_repr": 0
        },
        {
          "codigo": "FSCA125-01",
          "nombre": "Mecánica",
          "creditos": 8,
          "creditosSCT": 0,
          "carrera": 1704,
          "carrera_nombre": "INGENIERÍA CIVIL EN OBRAS CIVILES",
          "malla": 2001,
          "sem": 2,
          "requisitos": ["Geometría para ingeniería"],
          "optativo": 0,
          "tasa_repr": 0
        },

      ]



  },
  {
      num_sem:3,
      ramos:
      [
        {
          "codigo": "ELECT01",
          "nombre": "Optativo 1",
          "creditos": 0,
          "creditosSCT": 0,
          "carrera": 1704,
          "carrera_nombre": "INGENIERÍA CIVIL EN OBRAS CIVILES",
          "malla": 2001,
          "sem": 3,
          "requisitos": [],
          "optativo": 1,
          "tasa_repr": 0
        },
        {
          "codigo": "FSCA135-01",
          "nombre": "Fluidos y termodinámica",
          "creditos": 6,
          "creditosSCT": 0,
          "carrera": 1704,
          "sem": 3,
          "requisitos": ["Mecánica"],
          "optativo": 0,
          "tasa_repr": 0
        },
        {
          "codigo": "IDMI117-90",
          "nombre": "Programación y computación",
          "creditos": 6,
          "creditosSCT": 0,
          "carrera": 1704,
          "sem": 3,
          "requisitos": ["Cálculo en una variable"],
          "optativo": 0,
          "tasa_repr": 0
        },
        {
          "codigo": "MATM171-01",
          "nombre": "Cálculo diferencial en varias variables",
          "creditos": 6,
          "creditosSCT": 0,
          "carrera": 1704,
          "sem": 3,
          "requisitos": ["Cálculo en una variable"],
          "optativo": 0,
          "tasa_repr": 0
        },
        {
          "codigo": "MATM172-01",
          "nombre": "Ecuaciones diferenciales",
          "creditos": 8,
          "creditosSCT": 0,
          "carrera": 1704,
          "sem": 3,
          "requisitos": ["Cálculo en una variable", "Álgebra lineal"],
          "optativo": 0,
          "tasa_repr": 0
        },
      ]



  },
  {
      num_sem:4,
      ramos:
      [
        {
          "codigo": "IOCC115-90",
          "nombre": "Mecánica racional I",
          "creditos": 6,
          "creditosSCT": 0,
          "carrera": 1704,
          "sem": 4,
          "requisitos": ["Mecánica"],
          "optativo": 0,
          "tasa_repr": 0
        },
        {
          "codigo": "GEOG111-90",
          "nombre": "Geología general",
          "creditos": 4,
          "creditosSCT": 0,
          "carrera": 1704,
          "sem": 4,
          "requisitos": ["Mecánica", "Cálculo en una variable", "Geometría descriptiva II", "Álgebra lineal"],
          "optativo": 0,
          "tasa_repr": 0.0478723
        },
        {
          "codigo": "FSCA142-01",
          "nombre": "Electricidad y ondas",
          "creditos": 8,
          "creditosSCT": 0,
          "carrera": 1704,
          "carrera_nombre": "INGENIERÍA CIVIL EN OBRAS CIVILES",
          "malla": 2001,
          "sem": 4,
          "requisitos": ["Fluidos y termodinámica"],
          "optativo": 0,
          "tasa_repr": 0
        },
        {
          "codigo": "IMPT202-90",
          "nombre": "Materiales para ingeniería",
          "creditos": 4,
          "creditosSCT": 0,
          "carrera": 1704,
          "sem": 4,
          "requisitos": ["Fluidos y termodinámica", "Quimica general"],
          "optativo": 0,
          "tasa_repr": 0.0909091
        },
        {
          "codigo": "MATM173-01",
          "nombre": "Cálculo integral en varias variables",
          "creditos": 5,
          "creditosSCT": 0,
          "carrera": 1704,
          "sem": 4,
          "requisitos": ["Cálculo diferencial en varias variables"],
          "optativo": 0,
          "tasa_repr": 0
        },
      ]



  },

  {
      num_sem:5,
      ramos:
      [
        {
          "codigo": "ELECT02",
          "nombre": "Optativo 2",
          "creditos": 0,
          "creditosSCT": 0,
          "malla": 2001,
          "sem": 5,
          "requisitos": [],
          "optativo": 1,
          "tasa_repr": ""
        },
        {
          "codigo": "IOCC173-90",
          "nombre": "Topografía general",
          "creditos": 6,
          "creditosSCT": 0,
          "malla": 2001,
          "sem": 5,
          "requisitos": ["Geometría descriptiva II"],
          "optativo": 0,
          "tasa_repr": 0.169851
        },
        {
          "codigo": "IMPT207-90",
          "nombre": "Mecánica racional II",
          "creditos": 6,
          "creditosSCT": 0,
          "malla": 2001,
          "sem": 5,
          "requisitos": ["Mecánica racional I"],
          "optativo": 0,
          "tasa_repr": 0.405872
        },
        {
          "codigo": "IOCC117-90",
          "nombre": "Mecánica de solidos",
          "creditos": 6,
          "creditosSCT": 0,
          "malla": 2001,
          "sem": 5,
          "requisitos": ["Mecánica racional I"],
          "optativo": 0,
          "tasa_repr": 0.262857
        },
        {
          "codigo": "IECO102-90",
          "nombre": "Economía general",
          "creditos": 4,
          "creditosSCT": 0,
          "malla": 2001,
          "sem": 5,
          "requisitos": ["Ecuaciones diferenciales"],
          "optativo": 0,
          "tasa_repr": 0.08
        },
        {
          "codigo": "MATM272-01",
          "nombre": "Cálculo numerico",
          "creditos": 6,
          "creditosSCT": 0,
          "malla": 2001,
          "sem": 5,
          "requisitos": ["Cálculo integral en varias variables"],
          "optativo": 0,
          "tasa_repr": 1
        },
      ]



  },

  {
      num_sem:6,
      ramos:
      [
        {
          "codigo": "IMPT210-90",
          "nombre": "Mecánica de fluidos",
          "creditos": 6,
          "creditosSCT": 0,
          "malla": 2001,
          "sem": 6,
          "requisitos": ["Fluidos y termodinámica"],
          "optativo": 0,
          "tasa_repr": 0.108796
        },
        {
          "codigo": "ELEI204-90",
          "nombre": "Electricidad Aplicada",
          "creditos": 8,
          "creditosSCT": 0,
          "malla": 2001,
          "sem": 6,
          "requisitos": ["Fluidos y termodinámica"],
          "optativo": 0,
          "tasa_repr": 0.142857
        },
        {
          "codigo": "ADMI100-90",
          "nombre": "Administración de empresas",
          "creditos": 6,
          "creditosSCT": 0,
          "malla": 2001,
          "sem": 6,
          "requisitos": ["Economía general"],
          "optativo": 0,
          "tasa_repr": 0.0637523
        },
        {
          "codigo": "IOCC132-90",
          "nombre": "Análisis de estructuras I",
          "creditos": 6,
          "creditosSCT": 0,
          "malla": 2001,
          "sem": 6,
          "requisitos": ["Mecánica de solidos"],
          "optativo": 0,
          "tasa_repr": 0.140187
        },
        {
          "codigo": "MATM104-90",
          "nombre": "Introducción a la estadística",
          "creditos": 6,
          "creditosSCT": 0,
          "malla": 2001,
          "sem": 6,
          "requisitos": ["Cálculo diferencial en varias variables"],
          "optativo": 0,
          "tasa_repr": 0
        },
      ]



  },
  {
      num_sem:7,
      ramos:
      [
        {
          "codigo": "ELECT03",
          "nombre": "Optativo 3",
          "creditos": 0,
          "creditosSCT": 0,
          "malla": 2001,
          "sem": 7,
          "requisitos": [],
          "optativo": 1,
          "tasa_repr": ""
        },
        {
          "codigo": "CIDI000-90",
          "nombre": "Inglés instrumental I",
          "creditos": 4,
          "creditosSCT": 0,
          "malla": 2001,
          "sem": 7,
          "requisitos": [],
          "optativo": 0,
          "tasa_repr": 0
        },
        {
          "codigo": "IOCC246-90",
          "nombre": "Tecnología de hormigon",
          "creditos": 6,
          "creditosSCT": 0,
          "malla": 2001,
          "sem": 7,
          "requisitos": ["Materiales para ingeniería"],
          "optativo": 0,
          "tasa_repr": 0.0254237
        },
        {
          "codigo": "IOCC254-90",
          "nombre": "Hidráulica",
          "creditos": 6,
          "creditosSCT": 0,
          "malla": 2001,
          "sem": 7,
          "requisitos":["Mecánica de fluidos"],
          "optativo": 0,
          "tasa_repr": 0.334802
        },
        {
          "codigo": "IOCC260-98",
          "nombre": "Mecánica de suelos I",
          "creditos": 6,
          "creditosSCT": 0,
          "malla": 2001,
          "sem": 7,
          "requisitos": ["Mecánica de solidos"],
          "optativo": 0,
          "tasa_repr": 0.0681818
        },
        {
          "codigo": "IOCC133-90",
          "nombre": "Análisis de estructuras II",
          "creditos": 6,
          "creditosSCT": 0,
          "malla": 2001,
          "sem": 7,
          "requisitos": ["Análisis de estructuras I"],
          "optativo": 0,
          "tasa_repr": 0.263158
        },
      ]



  },

  {
      num_sem:8,
      ramos:
      [
        {
          "codigo": "IOCC236-90",
          "nombre": "Hormigon armado I",
          "creditos": 6,
          "creditosSCT": 0,
          "malla": 2001,
          "sem": 8,
          "requisitos": ["Análisis de estructuras I"],
          "optativo": 0,
          "tasa_repr": 0.299528
        },
        {
          "codigo": "IOCC288-90",
          "nombre": "Métodos matemáticos para ingeniería",
          "creditos": 4,
          "creditosSCT": 0,
          "malla": 2001,
          "sem": 8,
          "requisitos": ["Análisis de estructuras II", "Cálculo numerico"],
          "optativo": 0,
          "tasa_repr": 0.0952381
        },
        {
          "codigo": "IOCC250-90",
          "nombre": "Introducción a la construcción",
          "creditos": 4,
          "creditosSCT": 0,
          "malla": 2001,
          "sem": 8,
          "requisitos": ["Topografía general"],
          "optativo": 0,
          "tasa_repr": 0
        },
        {
          "codigo": "IOCC279-90",
          "nombre": "Construcción pesada básica",
          "creditos": 4,
          "creditosSCT": 0,
          "malla": 2001,
          "sem": 8,
          "requisitos": ["Topografía general"],
          "optativo": 0,
          "tasa_repr": 0
        },
        {
          "codigo": "IOCC263-90",
          "nombre": "Mecánica de suelos II",
          "creditos": 6,
          "creditosSCT": 0,
          "malla": 2001,
          "sem": 8,
          "requisitos": ["Mecánica de suelos I"],
          "optativo": 0,
          "tasa_repr": 0.106443
        },
      ]



  },
  {
      num_sem:9,
      ramos:
      [
        {
          "codigo": "IOCC238-90",
          "nombre": "Estructuras de acero I",
          "creditos": 6,
          "creditosSCT": 0,
          "malla": 2001,
          "sem": 9,
          "requisitos": ["Análisis de estructuras I"],
          "optativo": 0,
          "tasa_repr": 0.167683
        },
        {
          "codigo": "IOCC281-00",
          "nombre": "Computación para ingeniería estructural",
          "creditos": 6,
          "creditosSCT": 0,
          "malla": 2001,
          "sem": 9,
          "requisitos": ["Análisis de estructuras II"],
          "optativo": 0,
          "tasa_repr": 0.0462633
        },
        {
          "codigo": "IOCC237-90",
          "nombre": "Hormigón armado II",
          "creditos": 4,
          "creditosSCT": 0,
          "malla": 2001,
          "sem": 9,
          "requisitos": ["Hormigon armado I"],
          "optativo": 0,
          "tasa_repr": 0.246875
        },
        {
          "codigo": "IOCC265-90",
          "nombre": "Fundaciones",
          "creditos": 4,
          "creditosSCT": 0,
          "malla": 2001,
          "sem": 9,
          "requisitos": ["Mecánica de suelos I"],
          "optativo": 0,
          "tasa_repr": 1
        },
        {
          "codigo": "IOCC280-98",
          "nombre": "Diseño estructural de pavimento",
          "creditos": 4,
          "creditosSCT": 0,
          "malla": 2001,
          "sem": 9,
          "requisitos": ["Mecánica de suelos I"],
          "optativo": 0,
          "tasa_repr": 0.0152091
        },
      ]



  },

  {
      num_sem:10,
      ramos:
      [
        {
          "codigo": "IOCC239-90",
          "nombre": "Estructuras de acero II",
          "creditos": 6,
          "creditosSCT": 0,
          "malla": 2001,
          "sem": 10,
          "requisitos": ["Estructuras de acero I"],
          "optativo": 0,
          "tasa_repr": 0.0699301
        },
        {
          "codigo": "IOCC284-90",
          "nombre": "Programación en obras",
          "creditos": 2,
          "creditosSCT": 0,
          "malla": 2001,
          "sem": 10,
          "requisitos": ["Introducción a la construcción"],
          "optativo": 0,
          "tasa_repr": 0
        },
        {
          "codigo": "IOCC289-90",
          "nombre": "Administración de obras",
          "creditos": 4,
          "creditosSCT": 0,
          "malla": 2001,
          "sem": 10,
          "requisitos": ["Introducción a la construcción"],
          "optativo": 0,
          "tasa_repr": 0
        },
        {
          "codigo": "ELECT106-90",
          "nombre": "Principios de ecología",
          "creditos": 2,
          "creditosSCT": 0,
          "malla": 2001,
          "sem": 10,
          "requisitos": ["Hidráulica"],
          "optativo": 0,
          "tasa_repr": ""
        },
        {
          "codigo": "IOCC255-90",
          "nombre": "Redes de agua potable y alcantarillado",
          "creditos": 4,
          "creditosSCT": 0,
          "malla": 2001,
          "sem": 10,
          "requisitos": ["Hidráulica"],
          "optativo": 0,
          "tasa_repr": 0
        },
      ]



  },
  {
      num_sem:11,
      ramos:
      [
        {
          "codigo": "IOCC290-90",
          "nombre": "Evaluación de proyectos",
          "creditos": 4,
          "creditosSCT": 0,
          "malla": 2001,
          "sem": 11,
          "requisitos": ["Economía general"],
          "optativo": 0,
          "tasa_repr": 0.0267559
        },
        {
          "codigo": "IOCC134-90",
          "nombre": "Dinámica de estructuras",
          "creditos": 6,
          "creditosSCT": 0,
          "malla": 2001,
          "sem": 11,
          "requisitos": ["Análisis de estructuras II"],
          "optativo": 0,
          "tasa_repr": 0.0895522
        },
        {
          "codigo": "IOCC233-94",
          "nombre": "Taller de diseño estructural",
          "creditos": 4,
          "creditosSCT": 0,
          "malla": 2001,
          "sem": 11,
          "requisitos": ["Hormigón armado I"],
          "optativo": 0,
          "tasa_repr": 0.100877
        },
        {
          "codigo": "IOCC291-90",
          "nombre": "Trabajo de titulación I",
          "creditos": 4,
          "creditosSCT": 0,
          "malla": 2001,
          "sem": 11,
          "requisitos": ["Hormigón armado II"],
          "optativo": 0,
          "tasa_repr": 0
        },
      ]



  },
  {
      num_sem:12,
      ramos:
      [
        {
          "codigo": "ELECT04",
          "nombre": "Optativo 4",
          "creditos": 0,
          "creditosSCT": 0,
          "malla": 2001,
          "sem": 12,
          "requisitos": [],
          "optativo": 1,
          "tasa_repr": ""
        },
        {
          "codigo": "ELECT05",
          "nombre": "Optativo 5",
          "creditos": 0,
          "creditosSCT": 0,
          "malla": 2001,
          "sem": 12,
          "requisitos": [],
          "optativo": 1,
          "tasa_repr": ""
        },
        {
          "codigo": "ELECT06",
          "nombre": "Optativo 6",
          "creditos": 0,
          "creditosSCT": 0,
          "malla": 2001,
          "sem": 12,
          "requisitos": [],
          "optativo": 1,
          "tasa_repr": ""
        },
        {
          "codigo": "IOCC298-90",
          "nombre": "Tesis",
          "creditos": 2,
          "creditosSCT": 0,
          "malla": 2001,
          "sem": 12,
          "requisitos": [],
          "optativo": 0,
          "tasa_repr": 0.223684
        },
        {
          "codigo": "IOCC292-90",
          "nombre": "Trabajo de titulación II",
          "creditos": 8,
          "creditosSCT": 0,
          "malla": 2001,
          "sem": 12,
          "requisitos": ["Trabajo de titulación I"],
          "optativo": 0,
          "tasa_repr": 0
        },
      ]



  },
];
export default malla_obras_2001;