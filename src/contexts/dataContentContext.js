import React, { createContext, useState } from "react";
// start import icons
import html5 from "../assets/images/skills-icons/html5.svg";
import css3 from "../assets/images/skills-icons/css3.svg";
import javascript from "../assets/images/skills-icons/javascript.svg";
import bootstrap from "../assets/images/skills-icons/bootstrap.svg";
import sass from "../assets/images/skills-icons/sass.svg";
import typescript from "../assets/images/skills-icons/typescript.svg";
import visualstudiocode from "../assets/images/skills-icons/visualstudiocode.svg";
import npm from "../assets/images/skills-icons/npm.svg";

export const siteDataCtx = createContext();
siteDataCtx.displayName = "SiteLanguages";

const siteData = {
  en: {
    lang: "en",
    header: {
      navLinks: {
        navLinkHome: "Home",
        navLinkAbout: "About",
        navLinkSkills: "Skills",
        navLinkPortfolio: "Portfolio",
        navLinkContent: "contacts",
      },
      LocaleButton: "عربي",
    },
    home_page: {
      headding: "I'm ahmed shehata",
      sub_headding: "front-end web developer",
      hire_Button: "hire",
    },
    about: {
      section_heading: "about me",
      name: "ahmed shehata",
      details: `I'am A Junior Frontend - Web Developer
       And I'm From Alexandria , Egypt .
       The Level Of Education Is A Diploma
       Graduate Specialized Decoration .`,

      button: "skills",
      programingLang: [html5, css3, javascript, bootstrap, sass, typescript],
    },
    skills: {
      headdingBox: {
        iconName: "bi bi-terminal-fill",
        section_title: "Skills",
        sub_title:
          "Below Is A Brief Overview Of The Skills I Am Good At And The Amount Of Proficiency In Each Skill",
      },
      main_content: {
        titleTwo: " framework and languages",
        framework_and_Langlist: {
          lang_1: {
            id: 0,
            itemName: "html 5 ",
            iconName: html5,
            persent: "80%",
          },
          lang_2: {
            id: 1,
            itemName: "css & css3",
            iconName: css3,
            persent: "75%",
          },
          lang_3: {
            id: 2,
            itemName: "sass",
            iconName: sass,
            persent: "60%",
          },
          lang_4: {
            id: 3,
            itemName: "bootstrap",
            iconName: bootstrap,
            persent: "70%",
          },
          lang_5: {
            id: 4,
            itemName: "javaScript",
            iconName: javascript,
            persent: "75%",
          },
          lang_6: {
            id: 5,
            itemName: "TypeScript",
            iconName: typescript,
            persent: "50%",
          },
        },
        titleThree: " tools",
        toolsList: {
          tool_1: {
            id: 0,
            itemName: "VS Code",
            iconName: visualstudiocode,
            persent: "70%",
          },
          tool_2: {
            id: 1,
            itemName: "NPM",
            iconName: npm,
            persent: "25%",
          },
        },
      },
    },
    portfolio: {
      header: {
        title: "Portfolio",
        subTitle: "Below is an overview of my most notable personal projects",
        iconName: "bi bi-images",
      },
      projects: [
        {
          projectIMG:
            "https://raw.githubusercontent.com/AhmedShehata98/My-portflio/master/assets/images/gallery/toStudy.webp",
          name: "to study list [LocalStorage]",
          discription: "created with technology : [html -css- javascript ]",
          sourceLink: "https://github.com/AhmedShehata98/To-Study-List",
          demoLink: "https://ahmedshehata98.github.io/To-Study-List/",
        },
        {
          projectIMG:
            "https://raw.githubusercontent.com/AhmedShehata98/My-portflio/master/assets/images/gallery/Weather_App.webp",

          name: "weather app",
          discription:
            "created with technology : [html - css - api- javascript ]",
          sourceLink: "https://github.com/AhmedShehata98/Weather_App",
          demoLink: "https://ahmedshehata98.github.io/Weather_App/",
        },
        {
          projectIMG:
            "https://raw.githubusercontent.com/AhmedShehata98/My-portflio/master/assets/images/gallery/ecommers.webp",

          name: "e-commerce product page",
          discription: "created with technology : [html - css - javascript ]",
          sourceLink:
            "https://github.com/AhmedShehata98/ecommerce-product-page",
          demoLink: "https://ahmedshehata98.github.io/ecommerce-product-page/",
        },
        {
          projectIMG:
            "https://raw.githubusercontent.com/AhmedShehata98/My-portflio/master/assets/images/gallery/inventory.webp",

          name: "iventory system management [api]",
          discription:
            "created with technology : [html - css - api - javascript ]",
          sourceLink:
            "https://github.com/AhmedShehata98/Inventory-management-system",
          demoLink:
            "https://ahmedshehata98.github.io/Inventory-management-system/",
        },
        {
          projectIMG:
            "https://raw.githubusercontent.com/AhmedShehata98/My-portflio/master/assets/images/gallery/sunnyside-agency.webp",

          name: "landing page",
          discription: "created with technology : [html - css ]",
          sourceLink:
            "https://github.com/AhmedShehata98/sunnyside-agency-landing-page",
          demoLink:
            "https://ahmedshehata98.github.io/sunnyside-agency-landing-page/",
        },
        {
          projectIMG:
            "https://raw.githubusercontent.com/AhmedShehata98/My-portflio/master/assets/images/gallery/Music-Player-app.webp",

          name: "Music player app",
          discription: "created with technology : [html - css - javascript ]",
          sourceLink: "https://github.com/AhmedShehata98/Music-Player-app",
          demoLink: "https://ahmedshehata98.github.io/Music-Player-app/",
        },
      ],
      buttons: {
        priv: "previous",
        next: "next",
      },
    },
    contacts: {
      header: {
        iconName: "bi bi-person-lines-fill",
        title: "Contacts",
        subTitle:
          "Below are the most important ways to contact me and request a service",
      },
      form: {
        form_fields: {
          firstField: "First name",
          secondField: "last name",
          thirdField: "subject",
          fourthField: "enter your message",
        },
        buttons: {
          btn_1: "send",
          btn_2: "reset",
        },
      },
      contactsBoxes: [
        {
          itemLabel: "ahmedshehataq98@gmail.com",
          iconName: "bi bi-envelope-check-fill",
        },
        { itemLabel: "01559021655", iconName: "bi bi-telephone-forward-fill" },
        {
          itemLabel: "linkedin/ahmed-shehata-b63001225",
          iconName: "bi bi-linkedin",
        },
        { itemLabel: "facebook.com/MidoEsquire", iconName: "bi bi-facebook" },
        {
          itemLabel: "Egypt , Alexandria - st - Elhadara Elgededa ",
          iconName: "bi bi-compass-fill",
        },
      ],
    },
  },

  ar: {
    lang: "ar",
    header: {
      navLinks: {
        navLinkHome: "الرئيسية",
        navLinkAbout: "عني",
        navLinkSkills: "مهارات",
        navLinkPortfolio: "أعمالي",
        navLinkContent: "تواصل",
      },
      LocaleButton: "en",
    },

    home_page: {
      headding: "انا , احمد شحاتة",
      sub_headding: " أعمل كـ مطور ويب - فرونت أند",
      hire_Button: "استاجرني",
    },
    about: {
      section_heading: "من انا ؟",
      name: "أحمد شحاتة",
      details: `انا مطور ويب - فرونت أند
       اعيش في الاسكندرية - مصر .
       مستوي تعليمي هو دبلوم - تخصص زخرفة و اعلان .
       `,

      button: "مهاراتي",
      programingLang: [html5, css3, javascript, bootstrap, sass, typescript],
    },
    skills: {
      headdingBox: {
        section_title: "مهاراتي ؟",
        sub_title:
          "فيما يلي لمحة موجزة عن المهارات التي أجيدها ومقدار الإتقان في كل مهارة",
      },
      main_content: {
        titleTwo: " framework and languages",
        framework_and_Langlist: {
          lang_1: {
            id: 0,
            itemName: "html 5 ",
            iconName: html5,
            persent: "80%",
          },
          lang_2: {
            id: 1,
            itemName: "css & css3",
            iconName: css3,
            persent: "75%",
          },
          lang_3: {
            id: 2,
            itemName: "sass",
            iconName: sass,
            persent: "60%",
          },
          lang_4: {
            id: 3,
            itemName: "bootstrap",
            iconName: bootstrap,
            persent: "70%",
          },
          lang_5: {
            id: 4,
            itemName: "javaScript",
            iconName: javascript,
            persent: "75%",
          },
          lang_6: {
            id: 5,
            itemName: "TypeScript",
            iconName: typescript,
            persent: "50%",
          },
        },
        titleThree: " tools",
        toolsList: {
          tool_1: {
            id: 0,
            itemName: "VS Code",
            iconName: visualstudiocode,
            persent: "70%",
          },
          tool_2: {
            id: 1,
            itemName: "NPM",
            iconName: npm,
            persent: "25%",
          },
        },
      },
    },
    portfolio: {
      header: {
        title: "اعمالي",
        subTitle: "فيما يلي نظرة عامة على مشاريعي الشخصية الأكثر شهرة",
        iconName: "bi bi-images",
      },
      projects: [
        {
          projectIMG:
            "https://raw.githubusercontent.com/AhmedShehata98/My-portflio/master/assets/images/gallery/toStudy.webp",
          name: "قائمة التذكير بما تريد مذاكرته [LocalStorage]",
          discription:
            "الادوات و التكنولوجي المستخدمة : [html -css- javascript ]",
          sourceLink: "https://github.com/AhmedShehata98/To-Study-List",
          demoLink: "https://ahmedshehata98.github.io/To-Study-List/",
        },
        {
          projectIMG:
            "https://raw.githubusercontent.com/AhmedShehata98/My-portflio/master/assets/images/gallery/Weather_App.webp",

          name: "تطبيق معلومات الطقس",
          discription:
            "الادوات و التكنولوجي المستخدمة : [html - css - api- javascript ]",
          sourceLink: "https://github.com/AhmedShehata98/Weather_App",
          demoLink: "https://ahmedshehata98.github.io/Weather_App/",
        },
        {
          projectIMG:
            "https://raw.githubusercontent.com/AhmedShehata98/My-portflio/master/assets/images/gallery/ecommers.webp",

          name: "التجارة الإلكترونية - صفحة منتج",
          discription:
            "الادوات و التكنولوجي المستخدمة : [html - css - javascript ]",
          sourceLink:
            "https://github.com/AhmedShehata98/ecommerce-product-page",
          demoLink: "https://ahmedshehata98.github.io/ecommerce-product-page/",
        },
        {
          projectIMG:
            "https://raw.githubusercontent.com/AhmedShehata98/My-portflio/master/assets/images/gallery/inventory.webp",

          name: "تطبيق ادارة المخازن [api]",
          discription:
            "الادوات و التكنولوجي المستخدمة : [html - css - api - javascript ]",
          sourceLink:
            "https://github.com/AhmedShehata98/Inventory-management-system",
          demoLink:
            "https://ahmedshehata98.github.io/Inventory-management-system/",
        },
        {
          projectIMG:
            "https://raw.githubusercontent.com/AhmedShehata98/My-portflio/master/assets/images/gallery/sunnyside-agency.webp",

          name: "صفحة هبوط بسيطة ",
          discription: "الادوات و التكنولوجي المستخدمة : [html - css ]",
          sourceLink:
            "https://github.com/AhmedShehata98/Inventory-management-system",
          demoLink:
            "https://ahmedshehata98.github.io/Inventory-management-system/",
        },
        {
          projectIMG:
            "https://raw.githubusercontent.com/AhmedShehata98/My-portflio/master/assets/images/gallery/Music-Player-app.webp",

          name: "تطبيق مشغل الموسيقي",
          discription:
            "الادوات و التكنولوجي المستخدمة : [html - css - javascript ]",
          sourceLink:
            "https://github.com/AhmedShehata98/sunnyside-agency-landing-page",
          demoLink:
            "https://ahmedshehata98.github.io/sunnyside-agency-landing-page/",
        },
      ],
      buttons: {
        priv: "السابق",
        next: "التالي",
      },
    },
    contacts: {
      header: {
        title: "تواصل",
        subTitle: "في ما يلي بالاسفل اهم الطرق التواصل معي و طلب خدمة ",
      },
      form: {
        form_fields: {
          firstField: "الاسم الاول",
          secondField: "الاسم الاخير",
          thirdField: "الموضوع",
        },
        buttons: {
          btn_1: "ارسال رسالة",
          btn_2: "افراغ الحقول",
        },
      },
      contactsBoxes: [
        {
          itemLabel: "ahmedshehataq98@gmail.com",
          iconName: "bi bi-envelope-check-fill",
        },
        { itemLabel: "01559021655", iconName: "bi bi-telephone-forward-fill" },
        {
          itemLabel: "linkedin/ahmed-shehata-b63001225",
          iconName: "bi bi-linkedin",
        },
        { itemLabel: "facebook.com/MidoEsquire", iconName: "bi bi-facebook" },
        {
          itemLabel: "مصر - الاسكندرية - منطة الحضرة الجديدة",
          iconName: "bi bi-compass-fill",
        },
      ],
    },
  },
};

console.log(siteData);
const DataContentProvider = ({ children }) => {
  let [locale, setLocale] = useState("en");

  return (
    <siteDataCtx.Provider
      value={{ languages: siteData[locale], setLanguage: setLocale }}
    >
      {children}
    </siteDataCtx.Provider>
  );
};

export default DataContentProvider;
