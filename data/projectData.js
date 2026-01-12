const projectData = [
  {
    title: "Universal Differential Equations for Disentangling Crosstalk",
    logo: "/assets/projects/thesis.jpeg",
    description: "A hybrid modeling framework combining mechanistic ODEs and neural networks to infer signaling pathway crosstalk from single-cell time-series data.",
    details: [
      "Trained hybrid mechanistic - ML models(Universal Differential Equations) to learn unknown biological interactions (crosstalk) from time - series data.",
      "Applied symbolic regression(PySR) to extract mathematical expressions from neural network components.",
      "Evaluated the approach through both synthetically - generated data and real experiments.",
      "Built an end - to - end JAX pipeline for UDE training, model interpretability and evaluation"
    ],
    code: "https://github.com/xhemalkodragjini/master-thesis-ude-for-crosstalk",
    demo: "",
    skills: [
      "Universal Differential Equations",
      "Scientific Machine Learning",
      "JAX",
      "Diffrax",
      "Symbolic Regression",
      "Computational Biology"
    ]
  },
  {
    title: "Chemotherapy Resistance Predictor",
    logo: "/assets/projects/chemoresistance.png",
    description: "A Multi-Head Attention network for predicting chemotherapy resistance based on proteomics data.",
    details: ["This project involved training a Multi-Head Attention network with 13 heads covering 13 dimensions of the protemics pathways dataset.", "A baseline neural network was also trained to compare results from both models, and Matthews Correlation Coefficient was used to evaluate the predictions.", "The data contained noisy instances, which could not be processed due to lack of domain expertise. This led to low scores for both models."],
    code: "https://github.com/xhemalkodragjini/Chemotherapy-Resistance-Predictor",
    demo: "",
    skills: ["PyTorch", "Attention", "Matplotlib", "Git"]
  },
  {
    title: "News Toxicity Classifier",
    logo: "/assets/projects/news_classifier.png",
    description: "A fine-tuned Transformer (BERT) model for detecting toxic news headlines, embedded in a Streamlit app.",
    details: ["The BERT-Tiny Transformer was fine-tuned to predict the toxicity of news headlines.", "The model training and testing metrics were logged with Weights & Biases.", "A Streamlit-based UI was developed to interact with the model."],
    code: "https://github.com/xhemalkodragjini/Toxicity-Classifier",
    demo: "https://toxicity-classifier.streamlit.app/",
    skills: ["Transformers", "BERT", "HuggingFace", "Weights & Biases"]
  },
  {
    title: "Predicting Autism through Machine Learning",
    logo: "/assets/projects/predicting_autism.png",
    description: "A machine learning approach for early ASD screening using behavioral and demographic data.",
    details: ["The ASD Prediction project aims to predict Autism Spectrum Disorder in children by analyzing responses from a set of diagnostic questions.", "Various machine learning classifiers were trained and the Logistic Regression was selected due to higher accuracy (96%).", "The model was trained on a dataset containing responses from standardized tests, allowing it to predict the likelihood of ASD in early childhood."],
    code: "https://github.com/xhemalkodragjini/Predicting-Autism-Spectrum-Disorder",
    demo: "",
    skills: ["Machine Learning", "Python", "Pandas", "Scikit-learn", "Matplotlib"]
  },
  {
    title: "Poki.al - Platform for Autism",
    logo: "/assets/projects/poki.png",
    description: "A platform for Autism Spectrum Disorder, helping parents predict ASD at early stage and find common solutions for everyday problems.",
    details: ["Poki is a web app designed for a sensitive topic like Autism Spectrum Disorder (ASD). Through its features, parents and guardians can take the AQ-10 test for their children and get a prediction of ASD in early stages. They can also engage in a forum, asking about everyday problems of children with ASD, and get solutions from the experience sharing.", "The backend of the app was developed with Django, while frontend was designed using HTML, CSS, Bootstrap-CSS and JavaScript.", "The ML model behind the AQ-10 test was deployed after being trained on a dataset including responses from the standardized test of children from 0-36 months old."],
    code: "https://github.com/xhemalkodragjini/poki-al",
    demo: "https://poki-al.vercel.app/",
    skills: ["Django", "Python", "Web Development", "ML Deployment"]
  },
  {
    title: "Holocaustopedia",
    logo: "/assets/projects/holocaustopedia.png",
    description: "An educational web-based platform providing comprehensive articles and stories about the Holocaust.",
    details: ["The Holocaustopedia Project is a web-based platform that provides comprehensive information about the Holocaust in the form of articles.", "The tool was designed to be user-friendly and accessible, ensuring that users could easily navigate via their laptops, tablets, or mobile phones.", "Technologies Used: HTML, CSS, JavaScript."],
    code: "https://github.com/xhemalkodragjini/Holocaustopedia-Project",
    demo: "https://holocaustopedia-project.vercel.app/",
    skills: ["HTML", "CSS", "JavaScript"]
  },
];

export default projectData;
