const nasaData = [
  // ================= MARS DATASETS =================
  {
    planet: "Mars",
    dataset: "High Resolution Imaging Science Experiment (HiRISE)",
    link: "https://www.uahirise.org/ESP_089986_1980",
    papers: [
      { title: "Mars Reconnaissance Orbiter's High Resolution Imaging Science Experiment (HiRise)", url: "https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2005JE002605" },
      { title: "A classification of Martian gullies from HiRISE imagery", url: "https://www.sciencedirect.com/science/article/pii/S003206331530091X" },
      { title: "Automated detection of new impact sites on Martian surface from HiRISE images", url: "https://www.sciencedirect.com/science/article/pii/S0273117717304702" },
      { title: "HiRISE observations of new impact craters exposing Martian ground ice", url: "https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2013JE004482" }
    ]
  },
  {
    planet: "Mars",
    dataset: "The Global Context Camera (CTX) Mosaic of Mars",
    link: "https://murray-lab.caltech.edu/CTX/",
    papers: [
      { title: "The Global Context Camera (CTX) Mosaic of Mars: A Product of Information-Preserving Image Data Processing", url: "https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2024EA003555" },
      { title: "Learning the Link between Albedo and Reflectance: Machine Learning-Based Prediction of Hyperspectral Bands from CTX images", url: "https://www.mdpi.com/2072-4292/14/14/3457" },
      { title: "A Global Database of Pitted Cones on Mars for Research on Martian Volcanism", url: "https://www.nature.com/articles/s41597-024-03811-1" }
    ]
  },
  {
    planet: "Mars",
    dataset: "The Ensemble Mars Atmosphere Reanalysis System (EMARS) Version 1.0",
    link: "https://www.datacommons.psu.edu/commonswizard/Metadata_Display.aspx?Dataset=6171",
    papers: [
      { title: "The Ensemble Mars Atmosphere Reanalysis System (EMARS) Version 1.0", url: "https://rmets.onlinelibrary.wiley.com/doi/10.1002/gdj3.77" },
      { title: "An Investigation of the Encirclement of Mars by Dust in the 2018 Global Dust Storm Using EMARS", url: "https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2019JE006106" },
      { title: "Water Transport in the Mars Northern Winter Polar Atmosphere: Observations and Simulations", url: "https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2023JE008273" }
    ]
  },
  {
    planet: "Mars",
    dataset: "Dataset for Terrain-Aware Autonomous Driving on Mars",
    link: "https://data.nasa.gov/dataset/ai4mars-a-dataset-for-terrain-aware-autonomous-driving-on-mars",
    papers: [
      { title: "Ai4MARS: A Dataset for Terrain-Aware Autonomous Driving on Mars", url: "https://ieeexplore.ieee.org/document/9523149" },
      { title: "Deep Learning based Semantic Segmentation for Mars Rover Terrain Classification", url: "https://ieeexplore.ieee.org/abstract/document/10687827" },
      { title: "Deep Learning based Terrain Classification of Mars Raw Images using UNet and FCN Models", url: "https://ieeexplore.ieee.org/abstract/document/10498424" },
      { title: "Deep Learning Based Mars Terrain Classification with Edge Detection for Planetary Rovers", url: "https://ieeexplore.ieee.org/abstract/document/11170510" }
    ]
  },
  {
    planet: "Mars",
    dataset: "The Mars Orbiter Laser Altimeter (MOLA)",
    link: "https://science.gsfc.nasa.gov/attic/mola/index.html",
    papers: [
      { title: "Possible Ancient Oceans on Mars: Evidence from Mars Orbiter Laser Altimeter Data", url: "https://www.science.org/doi/full/10.1126/science.286.5447.2134" },
      { title: "Revisiting Atmospheric Features of Mars Orbiter Laser Altimeter Data Using Machine Learning Algorithm", url: "https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2022JE007384" },
      { title: "Vertical roughness of Mars from the Mars Orbiter Laser Altimeter", url: "https://agupubs.onlinelibrary.wiley.com/doi/abs/10.1029/1998GL900309" }
    ]
  },
  {
    planet: "Mars",
    dataset: "Rover Environmental Monitoring Station Data (REMS)",
    link: "https://atmos.nmsu.edu/data_and_services/atmospheres_data/MARS/curiosity/rems.html",
    papers: [
      { title: "Preliminary interpretation of the REMS pressure data from the first 100 sols of the MSL mission", url: "https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2013JE004488" },
      { title: "Gale surface wind characterization based on the Mars Science Laboratory REMS dataset", url: "https://www.sciencedirect.com/science/article/pii/S001910351730790X" },
      { title: "Mars weather data analysis using machine learning techniques", url: "https://link.springer.com/article/10.1007/s12145-021-00643-0" },
      { title: "Expanding Mars' Climate Modeling: Interpretable Machine Learning for Modeling Mars Science Laboratory Relative Humidity", url: "https://iopscience.iop.org/article/10.3847/PSJ/ad25fd/meta" },
      { title: "Machine learning techniques for analysis for mars weather data", url: "https://ieeexplore.ieee.org/abstract/document/10194233" }
    ]
  },
  {
    planet: "Mars",
    dataset: "Mars Environmental Dynamics Analyzer (MEDA)",
    link: "https://pds-atmospheres.nmsu.edu/data_and_services/atmospheres_data/PERSEVERANCE/meda.html",
    papers: [
      { title: "Near Surface Atmospheric Temperatures at Jezero from mars 2020 MEDA Measurements", url: "https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2022JE007559" },
      { title: "One Martian Year of Near-Surface Temperature at Jezero From MEDA Measurements on Mars 2020/Perseverance", url: "https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2024JE008385" },
      { title: "Perseverance MEDA Atmospheric Pressure Observations-Initial Results", url: "https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2023JE007880" },
      { title: "Advance dust devil detection with Al using Mars2020 MEDA instrument", url: "https://meetingorganizer.copernicus.org/EPSC2024/EPSC2024-538.html" },
      { title: "Vertices and Dust Devils As Observed by the MEDA Instruments onboard Mars 2020 Perserverance", url: "https://arxiv.org/abs/2109.04601" }
    ]
  },
  {
    planet: "Mars",
    dataset: "Alpha Particle X-Ray Spectrometer (APXS)",
    link: "https://pds-geosciences.wustl.edu/missions/msl/apxs.htm",
    papers: [
      { title: "Elemental Composition and Chemical Evolution of Geologic Material in Gale Crater, Mars: APXS Results", url: "https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2020JE006536" },
      { title: "Potassium-rich sandstone within the Gale impact crater, Mars: The APXS perspective", url: "https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2016JE005055" },
      { title: "APXS Derived Geochemistry of Shallow Water Lens Bodies Within the Mirador Formation", url: "https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2025JE009001" },
      { title: "Dusty Rocks in Gale Crater: Assessing Areal Coverage and Separating Dust and Rock Contributions", url: "https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2018JE005553" },
      { title: "Mars Science Laboratory alpha particle X-ray spectrometer trace elements", url: "https://www.sciencedirect.com/science/article/pii/S0094576519312445" },
      { title: "A global Mars dust composition refined by the Alpha-Particle X-ray Spectrometer in Gale Crater", url: "https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2015GL066675" }
    ]
  },
  {
    planet: "Mars",
    dataset: "ChemCam",
    link: "https://pds-geosciences.wustl.edu/missions/msl/chemcam.htm",
    papers: [
      { title: "The ChemCam Instrument Suite on the Mars Science Laboratory (MSL) Rover", url: "https://link.springer.com/article/10.1007/s11214-012-9912-2" },
      { title: "ChemCam activities and discoveries during the nominal mission of the Mars Science Laboratory", url: "http://s.rsc.org/en/content/articlehtml/2016/ja/c5ja00417a" },
      { title: "Chemistry of diagenetic features analyzed by ChemCam at Pahrump Hills, Gale Crater, Mars", url: "https://www.sciencedirect.com/science/article/pii/S0019103516305346" },
      { title: "Geochemistry of Mars with Laser-Induced Breakdown Spectroscopy (LIBS)", url: "https://www.mdpi.com/2075-163X/15/8/882" },
      { title: "In situ detection of boron by ChemCam on Mars", url: "https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2017GL074480" }
    ]
  },
  {
    planet: "Mars",
    dataset: "CheMin",
    link: "https://pds-geosciences.wustl.edu/missions/msl/chemin.htm",
    papers: [
      { title: "Characterization and Calibration of the CheMin Mineralogical Instrument on Mars Science Laboratory", url: "https://link.springer.com/article/10.1007/s11214-012-9905-1" },
      { title: "Mineralogy of Vera Rubin Ridge From the Mars Science Laboratory CheMin Instrument", url: "https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2019JE006306" },
      { title: "Mars Science Laboratory CheMin Data From the Glen Torridon Region", url: "https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2021JE007099" },
      { title: "Mineralogy, provenance, and diagnosis of a potassic basaltic sandstone on Mars", url: "https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2015JE004932" },
      { title: "Mineralogy and geochemistry of sedimentary rocks and eoloan sediments in Gale crater, Mars", url: "https://www.sciencedirect.com/science/article/pii/S0009281920300064" },
      { title: "Expanded insights into Martian mineralogy: Updated analysis of Gale crater's mineral composition via CheMin", url: "https://www.mdpi.com/2075-163X/14/8/773" },
      { title: "Gypsum, bassanite, and anhydrite at Gale crater, Mars", url: "https://www.degruyterbrill.com/document/doi/10.2138/am-2018-6346/html" }
    ]
  },
  {
    planet: "Mars",
    dataset: "Dynamic Albedo of Neutrons (DAN)",
    link: "https://pds-geosciences.wustl.edu/missions/msl/dan.htm",
    papers: [
      { title: "Dynamic Albedo of Neutrons (DAN) Experiment Onboard NASA's Mars Science Laboratory", url: "https://link.springer.com/article/10.1007/s11214-012-9924-y" },
      { title: "Data processing of the active neutron experiment DAN for a Martian regolith investigation", url: "https://www.sciencedirect.com/science/article/pii/S0168900215004490" },
      { title: "Neutron background environment measured by the Mars Science Laboratory's Dynamic Albedo of Neutrons Instrument", url: "https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2013JE004510" },
      { title: "Measuring subsurface water distribution using the Dynamic Albedo of Neutrons instrument on Mars Science Laboratory", url: "https://www.sciencedirect.com/science/article/abs/pii/S0168900208005792" },
      { title: "Analysis of Active Neutron Measurements From the Mars Science Laboratory Dynamic Albedo of Neutrons Instrument", url: "https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2019JE006264" },
      { title: "Observed diurnal variations in Mars Science laboratory Dynamic ALbedo of Neutrons passive mode data", url: "https://www.sciencedirect.com/science/article/abs/pii/S0168900218302882" },
      { title: "Active neutron sensing of the Martian surface with the DAN experiment", url: "https://link.springer.com/article/10.1134/s1063773716040058" }
    ]
  },
  {
    planet: "Mars",
    dataset: "Sample Analysis at Mars (SAM)",
    link: "https://pds-geosciences.wustl.edu/missions/msl/sam.htm",
    papers: [
      { title: "The Sample Analysis at Mars Investigation and Instrument Suite", url: "https://link.springer.com/article/10.1007/s11214-012-9879-z" },
      { title: "Initial SAM calibration gas experiments on Mars: Quadrupole mass spectrometer results and implications", url: "https://www.sciencedirect.com/science/article/pii/S0032063316304500" },
      { title: "Curiosity's Sample Analysis at Mars (SAM) Investigation: Overview of Results from the First 120 Sols", url: "https://ntrs.nasa.gov/citations/20130009709" },
      { title: "Possible Detection of Nitrated on Mars by the Sample Analysis at mars (SAM) Instrument", url: "https://ntrs.nasa.gov/citations/20130011099" },
      { title: "Sedimentary Organics in Glen Torridon, Gale Crater, Mars", url: "https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2021JE007107" },
      { title: "Seasonal Variations in Atmospheric Composition as Measured in Gale Crater, Mars", url: "https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2019JE006175" }
    ]
  },
  {
    planet: "Mars",
    dataset: "Shallow Radar (SHARAD)",
    link: "https://pds-geosciences.wustl.edu/missions/mro/default.htm",
    papers: [
      { title: "SHARAD sounding radar on the Mars Reconnaissance Orbiter", url: "https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2006JE002745" },
      { title: "SHARAD detection and characterization of subsurface water ice deposits in Utopia Planitia, Mars", url: "https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2016GL070138" },
      { title: "Science results from sixteen years of MRO SHARAD operations", url: "https://www.sciencedirect.com/science/article/pii/S0019103523002920" },
      { title: "Automated Discontinuity Detection and Reconstruction in Subsurface Environment of Mars Using Deep Learning", url: "https://www.mdpi.com/2076-3417/10/7/2279" },
      { title: "Shallow Water Ice Detection From SHARAD Data in Central Utopia Planitia, Mars", url: "https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2023JE008145" },
      { title: "SHARAD detection of sedimentary infilling within an unnamed crater near Mangala Fossa region, Mars", url: "https://www.sciencedirect.com/science/article/pii/S0019103521003687" },
      { title: "Studies of lava flows in the Tharsos region of Mars using SHARAD", url: "https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2014JE004666" }
    ]
  },
  {
    planet: "Mars",
    dataset: "Compact Reconnaissance Imaging Spectrometer for Mars (CRISM)",
    link: "https://pds-geosciences.wustl.edu/missions/mro/crism.htm",
    papers: [] 
  },
  {
    planet: "Mars",
    dataset: "Gravity/Radio Science Field Investigation Package",
    link: "https://pds-geosciences.wustl.edu/missions/mro/gravity.htm",
    papers: [
      { title: "Mars Reconnaissance Orbiter Radio Science Gravity Investigation", url: "https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2006JE002833" },
      { title: "Seasonal and static gravity field of Mars from MGS, Mars Odyssey and MRO radio science", url: "https://www.sciencedirect.com/science/article/pii/S0019103516001287" },
      { title: "Mars geodesy, rotation and gravity", url: "https://iopscience.iop.org/article/10.1088/1674-4527/10/8/002/meta" }
    ]
  },
  {
    planet: "Mars",
    dataset: "Mars Dune Digital Database",
    link: "https://catalog.data.gov/dataset/mars-dune-digital-database-merged-92d06",
    papers: [
      { title: "Mars Global Digital Dune Database and initial science results", url: "https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2007JE002943" },
      { title: "Mars Global Digital Dune Database (MGD3): Global dune distribution and wind pattern observations", url: "https://www.sciencedirect.com/science/article/pii/S0019103513001711" },
      { title: "Semiautomated Identification and Characterization of Dunes at Hargraves Crater, Mars", url: "https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2019EA000935" },
      { title: "Estimating Grain Sizes of Martian Dune Sand", url: "https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2024EA003697" }
    ]
  },
  {
    planet: "Mars",
    dataset: "Mars Atmosphere and Volatile Evolution Mission (MAVEN)",
    link: "https://etd.gsfc.nasa.gov/our-work/maven/",
    papers: [
      { title: "Mars thermosphere as seen in MAVEN accelerometer data", url: "https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2016JA023641" },
      { title: "Photochemical escape of oxygen from Mars: First results from MAVEN in situ data", url: "https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2016JA023525" },
      { title: "Characterizing Atmospheric Escape from Mars Today and Through Time, with MAVEN", url: "https://link.springer.com/article/10.1007/s11214-015-0165-8" },
      { title: "The spatial distribution of planetary ion fluxes near Mars observed by MAVEN", url: "https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2015GL065293" },
      { title: "Application of MAVEN Accelerometer and Attitude Control Data to Mars Atmospheric Characterization", url: "https://link.springer.com/article/10.1007/s11214-014-0095-x" }
    ]
  },
  {
    planet: "Mars",
    dataset: "Mars Climate Sounder",
    link: "#",
    papers: [
      { title: "The radiative impact of water ice clouds from a reanalysis of Mars Climate Sounder data", url: "https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2014GL060235" },
      { title: "Mars Climate Sounder Observation of Mars’ 2018 Global Dust Storm", url: "https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2019GL083931" },
      { title: "Global Seasonal Variations of Martian Atmospheric Pressure and Density From Mars Climate Sounder", url: "https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2025JA034148" },
      { title: "Aerosols and Tides in the martian Tropics During Southern Hemisphere Spring Equinox", url: "https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2020JE006776" },
      { title: "Seasonal Variation of Martian middle atmosphere tides observed by the Mars Climater Sounder", url: "https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2015JE004922" }
    ]
  },
  {
    planet: "Mars",
    dataset: "Insight: Seismic Experiment for Investigating the Subsurface (SEIS)",
    link: "https://pds-geosciences.wustl.edu/missions/insight/seis.htm",
    papers: [
      { title: "The Marsquake Service: Securing Daily Analysis of SEIS Data", url: "https://link.springer.com/article/10.1007/s11214-018-0567-5" },
      { title: "Autocorrelation of the Ground Vibrations Recorded by the SEIS-InSight Seismometer on Mars", url: "https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2020JE006498" },
      { title: "Initial results from the InSight mission on Mars", url: "https://www.nature.com/articles/s41561-020-0544-y" },
      { title: "A New Crater Near InSight: Implications for Seismic Impact Detectibility on Mars", url: "https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2020JE006382" },
      { title: "Two Seismic Events from InSight Confirmed as New Impacts on Mars", url: "https://iopscience.iop.org/article/10.3847/PSJ/ace9b4/meta" }
    ]
  },

  // ================= MOON DATASETS =================
  {
    planet: "Moon",
    dataset: "The Lunar Orbiter Laser Altimeter (LOLA)",
    link: "https://imbrium.mit.edu/",
    papers: [
      { title: "The steepest slopes on the Moon from Lunar Orbiter Laser Altimeter (LOLA) data", url: "https://www.sciencedirect.com/science/article/pii/S0019103516001147" },
      { title: "Automatic Detection and Boundary Extraction of Lunar Craters Based on LOLA DEM Data", url: "https://link.springer.com/article/10.1007/s11038-015-9467-9" },
      { title: "Classifying Safe Lunar Landing Sites Using Deep Learning and LRO Data", url: "https://essopenarchive.org/doi/full/10.22541/essoar.174017038.83959239" },
      { title: "A New View of the Lunar South pole from the Lunar Orbiter Laser Altimeter (LOLA)", url: "https://iopscience.iop.org/article/10.3847/PSJ/acf3e1/meta" }
    ]
  },
  {
    planet: "Moon",
    dataset: "The Diviner Lunar Radiometer Experiment",
    link: "https://www.diviner.ucla.edu/science",
    papers: [
      { title: "The global surface temperatures of the Moon as measured by the Divine Lunar Radiometer Experiment", url: "https://www.sciencedirect.com/science/article/pii/S0019103516304869" },
      { title: "Unsupervised Learning for Thermophysical Analysis on the Lunar Surface", url: "https://iopscience.iop.org/article/10.3847/PSJ/ab9a52/meta" },
      { title: "Temperatures of the Lacus Mortis Region of the Moon", url: "https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2021EA001966" }
    ]
  },
  {
    planet: "Moon",
    dataset: "Gravity Recovery and Interior laboratory (GRAIL)",
    link: "https://pds-geosciences.wustl.edu/missions/grail/default.htm",
    papers: [
      { title: "The Crust of the Moon as Seen by GRAIL", url: "https://www.science.org/doi/full/10.1126/science.1231530" },
      { title: "Gravity field of the Moon from the Gravity Recovery and Interior Laboratory (GRAIL) mission", url: "https://www.science.org/doi/full/10.1126/science.1231507" },
      { title: "Evidence of large empty lava tubes on the Moon using GRAIL gravity", url: "https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2016GL071588" },
      { title: "Detection and characterization of buried lunar craters with GRAIL data", url: "https://www.sciencedirect.com/science/article/pii/S0019103517301586" }
    ]
  },
  {
    planet: "Moon",
    dataset: "ShadowCam",
    link: "https://shadowcam.im-ldi.com/archive",
    papers: [
      { title: "Radiance Contrasts at Possible Water Ice Exposures Seen by ShadowCam", url: "https://iopscience.iop.org/article/10.3847/PSJ/adb8d1/meta" },
      { title: "Machine learning Driven Detection of 1 Billion + Lunar Impact Craters In Permanently Shadowed Regions", url: "https://ntrs.nasa.gov/citations/20250002412" },
      { title: "Luminance Within Lunar Permanently Shadowed Regions", url: "https://www.janss.kr/archive/view_article?pid=jass-42-4-97" },
      { title: "First look, first results-comparing secondary Illumination at Lunar Permanently Shadowed Regions", url: "https://ieeexplore.ieee.org/abstract/document/10282497" },
      { title: "Peering into lunar permanently shadowed regions with deep learning", url: "https://www.nature.com/articles/s41467-021-25882-z" }
    ]
  },
  {
    planet: "Moon",
    dataset: "Mineral Mineralogy Mapper (M3)",
    link: "https://pds-imaging.jpl.nasa.gov/volumes/m3.html",
    papers: [
      { title: "Water on the surface of the Moon as seen by the Moon Minralogy Mapper", url: "https://www.science.org/doi/full/10.1126/sciadv.1701471" },
      { title: "The Global Distribution of water and hydroxyl on the Moon as seen by the Moon Mineralogy Mapper (M3)", url: "https://iopscience.iop.org/article/10.3847/PSJ/ad5837/meta" },
      { title: "A Novel Clustering-Based Methodology for Mapping Lunar Surface Minerals", url: "https://www.mdpi.com/2072-4292/18/5/776" },
      { title: "Quantitative Mineral Maps of the Lunar South Polar Region Derived From the Moon Mineralogy mapper", url: "https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2024JE008842" }
    ]
  },
  {
    planet: "Moon",
    dataset: "Robbins Moon Crater Database v1 Robbins",
    link: "https://astrogeology.usgs.gov/search/map/moon_crater_database_v1_robbins",
    papers: [
      { title: "A new global Database of Lunar Impact craters > 1-2 km", url: "https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2018JE005592" },
      { title: "A robust crater matching algorithm for autonomous vision-based spacecraft navigation", url: "https://ieeexplore.ieee.org/abstract/document/9511670" },
      { title: "Automatic detection for small-scale lunar impact crater using deep learning", url: "https://www.sciencedirect.com/science/article/pii/S0273117723003976" }
    ]
  },
  {
    planet: "Moon",
    dataset: "Lunar Reconnaissance Orbiter Camera (LROC)",
    link: "https://lroc.im-ldi.com/images/downloads",
    papers: [
      { title: "Lunar Reconnaissance Orbiter Camera (LROC) Instrument Overview", url: "https://link.springer.com/article/10.1007/s11214-010-9634-2" },
      { title: "Small Lunar Crater Detection from LROC NAC using statistically constrained path morphologies", url: "https://ieeexplore.ieee.org/abstract/document/10534866" }
    ]
  },
  {
    planet: "Moon",
    dataset: "Moon Clementine UVVIS Global Mosaic 118m",
    link: "#",
    papers: []
  },
  {
    planet: "Moon",
    dataset: "Chandra’s Surface Thermo-Physical Experiment (ChaSTE)",
    link: "#",
    papers: []
  },
  {
    planet: "Moon",
    dataset: "Lunar Exploration Neutron Detector (LEND)",
    link: "#",
    papers: []
  },
  {
    planet: "Moon",
    dataset: "Lunar Crater Observation and Sensing Satellite (LCROSS)",
    link: "#",
    papers: []
  },
  {
    planet: "Moon",
    dataset: "Miniature Radio Frequency (MiniRF)",
    link: "#",
    papers: []
  },
  {
    planet: "Moon",
    dataset: "Midcourse Space Experiment (MSX)",
    link: "#",
    papers: []
  },
  {
    planet: "Moon",
    dataset: "Lunar Prospector Magnetometer/ Electron Reflectometer Data",
    link: "https://pds-geosciences.wustl.edu/missions/lunarp/mager.html",
    papers: [
      { title: "Initial measurements of the lunar induced magnetic dipole moments using Lunar Prospector Magnetometer data", url: "https://agupubs.onlinelibrary.wiley.com/doi/abs/10.1029/1999GL900487" },
      { title: "Mapping of crustal magnetic anomalies on the lunar near side by the lunar Prospector electron reflectometer", url: "https://agupubs.onlinelibrary.wiley.com/doi/abs/10.1029/2000JE001380" },
      { title: "A global model of the internal magnetic field of the Moon based on Lunar Prospector magnetometer observations", url: "https://www.sciencedirect.com/science/article/pii/S0019103508001346" },
      { title: "Initial mapping and interpretation of lunar crustal magnetic anomalies using Lunar Prospector magnetometer data", url: "#" }
    ]
  }
];

// ================= LOGIC =================

// Function to generate the cards safely
function renderCards(data) {
  const dashboard = document.getElementById('dashboard');
  dashboard.innerHTML = '';
  
  if (!data || data.length === 0) {
      dashboard.innerHTML = '<p class="no-results">No datasets or papers matched your search.</p>';
      return;
  }

  data.forEach(item => {
    // Safely generate the list of papers
    let papersHtml = "";
    if (item.papers && item.papers.length > 0) {
      papersHtml = item.papers.map(p => {
        let paperLink = (p.url && p.url !== "#") ? `<a href="${p.url}" target="_blank">${p.title}</a>` : p.title;
        return `<li>${paperLink}</li>`;
      }).join('');
    } else {
      papersHtml = "<li><em>No specific papers listed.</em></li>";
    }
    
    // Assign correct tag color class based on the planet safely
    let safePlanet = item.planet ? item.planet.toLowerCase() : 'unknown';
    let planetClass = safePlanet === 'mars' ? 'mars' : (safePlanet === 'moon' ? 'moon' : '');

    // Set Dataset link safely
    let datasetLink = (item.link && item.link !== "#") ? `<a href="${item.link}" target="_blank">${item.dataset}</a>` : item.dataset;

    // Create the card element
    let card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <span class="tag ${planetClass}">${item.planet || 'Dataset'}</span>
      <h2>${datasetLink}</h2>
      <h3>Published Papers</h3>
      <ul>${papersHtml}</ul>
    `;
    dashboard.appendChild(card);
  });
}

// CRASH-PROOF event listener for the live-search bar
document.getElementById('searchInput').addEventListener('input', function(e) {
  // .trim() handles accidental spaces at the end of the input (like "mars ")
  const term = e.target.value.toLowerCase().trim(); 
  
  const filtered = nasaData.filter(item => {
    // Safely check dataset and planet names (fallback to empty string if missing)
    const safeDataset = (item.dataset || "").toLowerCase();
    const safePlanet = (item.planet || "").toLowerCase();
    
    const matchDataset = safeDataset.includes(term);
    const matchPlanet = safePlanet.includes(term);
    
    // Safely check papers array and titles
    const safePapers = item.papers || [];
    const matchPaper = safePapers.some(p => 
      (p.title || "").toLowerCase().includes(term)
    );
    
    return matchDataset || matchPlanet || matchPaper;
  });
  
  renderCards(filtered);
});

// Initial render to show everything when the page loads
renderCards(nasaData);
