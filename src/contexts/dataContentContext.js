import React, { createContext, useState } from "react";

// start import icons
import { TiHtml5 } from "react-icons/ti";
import { TiCss3 } from "react-icons/ti";
import { FaSass } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiVisualstudiocode } from "react-icons/si";
import { FaNpm } from "react-icons/fa";

export const siteDataCtx = createContext();
siteDataCtx.displayName = "SiteLanguages";

const siteData = {
  en: {
    lang: "en",
    header: {
      navLinks: {
        navLinkHome: "Home",
        navLinkAbout: "About",
        navLinkServices: "services",
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
      programingLang: [
        TiHtml5,
        TiCss3,
        FaSass,
        SiJavascript,
        FaBootstrap,
        SiTypescript,
      ],
    },
    services: {
      header: {
        title: "what i do ?",
        subTitle:
          "Below is an overview of the things I'm good at in the field of 'developing web applications' ",
        iconName: "bi bi-lightbulb",
      },
      servicesList: [
        {
          serviceName: "freelancer",
          serviceDescription:
            "I am happy to know the idea of your application that you want to implement and turn this idea into a real application that brings you willing customers",
          serviceIcon: "bi bi-person-workspace",
        },
        {
          serviceName: "performance",
          serviceDescription:
            "An application that saves you time in times of fast site loading, lag-free interaction and good performance, this is my top priority",
          serviceIcon: "bi bi-speedometer",
        },
        {
          serviceName: "responsive ",
          serviceDescription:
            " It is a necessity today in any web application that this application be suitable on most screens of electronic devices. And this, of course, is what I answer",
          serviceIcon: "bi bi-arrows-fullscreen",
        },
        {
          serviceName: "Less budget, more time",
          serviceDescription:
            " Finish the project in the shortest possible time. With the cost of the project budget less and save as much as possible",
          serviceIcon: "bi bi-currency-dollar",
        },
        {
          serviceName: "Create web applications ",
          serviceDescription:
            "Create a website based on your idea and turn this idea into a web application that serves your customers and upload it to a suitable hosting to achieve access to it from anywhere",
          serviceIcon: "bi bi-window-fullscreen",
        },
      ],
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
            Icon: TiHtml5,
            persent: "80%",
          },
          lang_2: {
            id: 1,
            itemName: "css & css3",
            Icon: TiCss3,
            persent: "75%",
          },
          lang_3: {
            id: 2,
            itemName: "sass",
            Icon: FaSass,
            persent: "60%",
          },
          lang_4: {
            id: 3,
            itemName: "bootstrap",
            Icon: FaBootstrap,
            persent: "70%",
          },
          lang_5: {
            id: 4,
            itemName: "javaScript",
            Icon: SiJavascript,
            persent: "75%",
          },
          lang_6: {
            id: 5,
            itemName: "TypeScript",
            Icon: SiTypescript,
            persent: "50%",
          },
        },
        titleThree: " tools",
        toolsList: {
          tool_1: {
            id: 0,
            itemName: "VS Code",
            Icon: SiVisualstudiocode,
            persent: "70%",
          },
          tool_2: {
            id: 1,
            itemName: "NPM",
            Icon: FaNpm,
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
        navLinkServices: "خدمات",
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
      programingLang: [
        TiHtml5,
        TiCss3,
        FaSass,
        SiJavascript,
        FaBootstrap,
        SiTypescript,
      ],
    },
    services: {
      header: {
        title: "ما اجيده ؟",
        subTitle:
          'فيما يلي بالاسفل نبذة عامة فيما الاشياء التي اجيدها في مجال  " نطوير و انشاء تطبيقات ويب" ',
      },
      servicesList: [
        {
          serviceName: "فري لانسر",
          serviceDescription:
            " يسعدني معرفة فكرة تطبيقك الني تريد ان نتفذها و احول الفكرة هذة الي نطبيق حقيقي يجلب لك العملاء المستعدفون",
          serviceIcon: "bi bi-person-workspace",
        },
        {
          serviceName: "اداء",
          serviceDescription:
            " تطبيق يوفر لك الوقت في أوقات التحميل السريع للموقع والتفاعل الخالي من التأخير و اداء جيد ، هذا هو أولويتي القصوى",
          serviceIcon: "bi bi-speedometer",
        },
        {
          serviceName: "استجابة و ملائمة ",
          serviceDescription:
            " من الضروريات اليوم في اي تطبيق من تطبيقات الويب ان يكون هذا التطبيق ملائم علي معظم شاشات الاجهزة الالكترونية . و هذا بالطبع ما اجيبه",
          serviceIcon: "bi bi-arrows-fullscreen",
        },
        {
          serviceName: " ميذانية اقل وقت اوفر ",
          serviceDescription:
            " انهاء المشروع في اقل وقت ممكن . مع تكلفة لميذانية المشروع اقل و اوفر بقدر المستطاء ",
          serviceIcon: "bi bi-currency-dollar",
        },
        {
          serviceName: "انشاء مواقع و تطبيقان ويب ",
          serviceDescription:
            " انشاء موقع ويب مستندا علي فكرتك و تحويل الفكرة هذه الي تطبيق ويب يخدم عملائك و رفعه علي استضافة مناسبة لتحقيق الوصول اليه من اي مكان",
          serviceIcon: "bi bi-window-fullscreen",
        },
      ],
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
            Icon: TiHtml5,
            persent: "80%",
          },
          lang_2: {
            id: 1,
            itemName: "css & css3",
            Icon: TiCss3,
            persent: "75%",
          },
          lang_3: {
            id: 2,
            itemName: "sass",
            Icon: FaSass,
            persent: "60%",
          },
          lang_4: {
            id: 3,
            itemName: "bootstrap",
            Icon: FaBootstrap,
            persent: "70%",
          },
          lang_5: {
            id: 4,
            itemName: "javaScript",
            Icon: SiJavascript,
            persent: "75%",
          },
          lang_6: {
            id: 5,
            itemName: "TypeScript",
            Icon: SiTypescript,
            persent: "50%",
          },
        },
        titleThree: " tools",
        toolsList: {
          tool_1: {
            id: 0,
            itemName: "VS Code",
            Icon: SiVisualstudiocode,
            persent: "70%",
          },
          tool_2: {
            id: 1,
            itemName: "NPM",
            Icon: FaNpm,
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

const DataContentProvider = ({ children }) => {
  let [locale, setLocale] = useState("en");

  return (
    <siteDataCtx.Provider
      value={{
        languages: siteData[locale],
        setLanguage: setLocale,
      }}
    >
      {children}
    </siteDataCtx.Provider>
  );
};

export default DataContentProvider;
