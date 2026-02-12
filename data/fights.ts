import { FightData } from '../types';

const getVideo = (opponent: string) => `https://www.youtube.com/results?search_query=khabib+vs+${opponent.replace(' ', '+')}`;

export const fightHistory: FightData[] = [
  { 
    "datum": "2020-10-24", "event": "UFC 254", "gegner": "Justin Gaethje", "methode": "Technical Submission (Triangle)", "runde": "2", "zeit": "1:34", "ort": "Abu Dhabi",
    "videoUrl": getVideo("Justin Gaethje")
  },
  { 
    "datum": "2019-09-07", "event": "UFC 242", "gegner": "Dustin Poirier", "methode": "Submission (RNC)", "runde": "3", "zeit": "2:06", "ort": "Abu Dhabi",
    "videoUrl": getVideo("Dustin Poirier")
  },
  { 
    "datum": "2018-10-06", "event": "UFC 229", "gegner": "Conor McGregor", "methode": "Submission (Neck Crank)", "runde": "4", "zeit": "3:03", "ort": "Las Vegas",
    "videoUrl": getVideo("Conor McGregor")
  },
  { 
    "datum": "2018-04-07", "event": "UFC 223", "gegner": "Al Iaquinta", "methode": "Decision (Unanimous)", "runde": "5", "zeit": "5:00", "ort": "Brooklyn",
    "videoUrl": getVideo("Al Iaquinta")
  },
  { 
    "datum": "2017-12-30", "event": "UFC 219", "gegner": "Edson Barboza", "methode": "Decision (Unanimous)", "runde": "3", "zeit": "5:00", "ort": "Las Vegas",
    "videoUrl": getVideo("Edson Barboza")
  },
  { 
    "datum": "2016-11-12", "event": "UFC 205", "gegner": "Michael Johnson", "methode": "Submission (Kimura)", "runde": "3", "zeit": "2:31", "ort": "New York",
    "videoUrl": getVideo("Michael Johnson")
  },
  { 
    "datum": "2016-04-16", "event": "UFC on FOX 19", "gegner": "Darrell Horcher", "methode": "KO/TKO (Punches)", "runde": "2", "zeit": "3:38", "ort": "Tampa",
    "videoUrl": getVideo("Darrell Horcher")
  },
  { 
    "datum": "2014-04-19", "event": "UFC on FOX 11", "gegner": "Rafael Dos Anjos", "methode": "Decision (Unanimous)", "runde": "3", "zeit": "5:00", "ort": "Orlando",
    "videoUrl": getVideo("Rafael Dos Anjos")
  },
  { 
    "datum": "2013-09-21", "event": "UFC 165", "gegner": "Pat Healy", "methode": "Decision (Unanimous)", "runde": "3", "zeit": "5:00", "ort": "Toronto",
    "videoUrl": getVideo("Pat Healy")
  },
  { 
    "datum": "2013-05-25", "event": "UFC 160", "gegner": "Abel Trujillo", "methode": "Decision (Unanimous)", "runde": "3", "zeit": "5:00", "ort": "Las Vegas",
    "videoUrl": getVideo("Abel Trujillo")
  },
  { 
    "datum": "2013-01-19", "event": "UFC on FX 7", "gegner": "Thiago Tavares", "methode": "KO/TKO (Elbows)", "runde": "1", "zeit": "1:55", "ort": "Sao Paulo",
    "videoUrl": getVideo("Thiago Tavares")
  },
  { 
    "datum": "2012-07-07", "event": "UFC 148", "gegner": "Gleison Tibau", "methode": "Decision (Unanimous)", "runde": "3", "zeit": "5:00", "ort": "Las Vegas",
    "videoUrl": getVideo("Gleison Tibau")
  },
  { 
    "datum": "2012-01-20", "event": "UFC on FX 1", "gegner": "Kamal Shalorus", "methode": "Submission (RNC)", "runde": "3", "zeit": "2:08", "ort": "Nashville",
    "videoUrl": getVideo("Kamal Shalorus")
  },
  {
    "datum": "2011-10-22", "event": "ProFC 36", "gegner": "Arymarcel Santos", "methode": "TKO (Punches)", "runde": "1", "zeit": "3:33", "ort": "Khasavyurt",
    "videoUrl": getVideo("Arymarcel Santos")
  },
  {
    "datum": "2011-09-15", "event": "ProFC 33", "gegner": "Vadim Sandulskiy", "methode": "Submission (Triangle)", "runde": "3", "zeit": "3:01", "ort": "Odessa",
    "videoUrl": getVideo("Vadim Sandulskiy")
  },
  { 
    "datum": "2011-08-05", "event": "ProFC 30", "gegner": "Hamiz Mamedov", "methode": "Submission (Triangle)", "runde": "1", "zeit": "3:51", "ort": "Rostov",
    "videoUrl": getVideo("Hamiz Mamedov")
  },
  { 
    "datum": "2011-07-02", "event": "ProFC 29", "gegner": "Kadzhik Abadzhyan", "methode": "Submission (Triangle)", "runde": "1", "zeit": "4:28", "ort": "Rostov",
    "videoUrl": getVideo("Kadzhik Abadzhyan")
  },
  { 
    "datum": "2011-05-06", "event": "ProFC 26", "gegner": "Ashot Shahinyan", "methode": "KO (Punches)", "runde": "1", "zeit": "2:18", "ort": "Simferopol",
    "videoUrl": getVideo("Ashot Shahinyan")
  },
  { 
    "datum": "2011-04-09", "event": "ProFC 25", "gegner": "Said Khalilov", "methode": "Submission (Kimura)", "runde": "1", "zeit": "3:16", "ort": "Rostov",
    "videoUrl": getVideo("Said Khalilov")
  },
  {
    "datum": "2011-02-12", "event": "M-1 Selection", "gegner": "Alexander Aggar", "methode": "TKO (Corner Stoppage)", "runde": "2", "zeit": "5:00", "ort": "Kiev",
    "videoUrl": getVideo("Alexander Aggar")
  },
  {
    "datum": "2010-09-18", "event": "M-1 Selection", "gegner": "Vitaliy Ostrovskiy", "methode": "TKO (Punches)", "runde": "1", "zeit": "4:06", "ort": "Kiev",
    "videoUrl": getVideo("Vitaliy Ostrovskiy")
  },
  {
    "datum": "2010-06-10", "event": "Golden Fist", "gegner": "Ali Bagov", "methode": "Decision (Unanimous)", "runde": "2", "zeit": "5:00", "ort": "Moscow",
    "videoUrl": getVideo("Ali Bagov")
  },
  {
    "datum": "2009-11-03", "event": "M-1 Challenge", "gegner": "Shahbulat Shamhalaev", "methode": "Submission (Armbar)", "runde": "1", "zeit": "4:36", "ort": "St. Petersburg",
    "videoUrl": getVideo("Shahbulat Shamhalaev")
  },
  {
    "datum": "2009-08-08", "event": "Tsumada FC 3", "gegner": "Eldar Eldarov", "methode": "TKO (Punches)", "runde": "2", "zeit": "2:44", "ort": "Agvali",
    "videoUrl": getVideo("Eldar Eldarov")
  },
  {
    "datum": "2009-08-08", "event": "Tsumada FC 3", "gegner": "Said Akhmed", "methode": "TKO (Punches)", "runde": "1", "zeit": "2:05", "ort": "Agvali",
    "videoUrl": getVideo("Said Akhmed")
  },
  {
    "datum": "2008-10-11", "event": "Pankration Atrium", "gegner": "Shamil Abdulkerimov", "methode": "Decision (Unanimous)", "runde": "2", "zeit": "5:00", "ort": "Moscow",
    "videoUrl": getVideo("Shamil Abdulkerimov")
  },
  {
    "datum": "2008-10-11", "event": "Pankration Atrium", "gegner": "Ramazan Kurbanismailov", "methode": "Decision (Unanimous)", "runde": "2", "zeit": "5:00", "ort": "Moscow",
    "videoUrl": getVideo("Ramazan Kurbanismailov")
  },
  {
    "datum": "2008-10-11", "event": "Pankration Atrium", "gegner": "Magomed Magomedov", "methode": "Decision (Unanimous)", "runde": "2", "zeit": "5:00", "ort": "Moscow",
    "videoUrl": getVideo("Magomed Magomedov")
  },
  {
    "datum": "2008-09-13", "event": "CSFU", "gegner": "Vusal Bayramov", "methode": "Submission (Triangle)", "runde": "1", "zeit": "2:20", "ort": "Poltava",
    "videoUrl": getVideo("Vusal Bayramov")
  }
];
