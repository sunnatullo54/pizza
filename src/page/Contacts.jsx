import React from "react";


const Contacts = (lang) => {
  return (
    <div className="container">
      <h1 className="text-yellov">
        {lang === "ru" && "Контакты"}
        {lang === "uz" && "Kontaktlar"}
        {lang === "en" && "Contacts"}
      </h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2518.9467334542!2d69.6010599!3d40.849475399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae2dd0a7182d4b%3A0x4cbfcb1de9db07fc!2siTech!5e1!3m2!1suz!2s!4v1745678357596!5m2!1suz!2s"
        width='100%'
        height="450"
      ></iframe>
    </div>
  );
};

export default Contacts;
