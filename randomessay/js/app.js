//immediate invoked function expression
(function() {
  const quotes = [
    {
      quote:
        "Should everyone engage in volunteering and charity?",
      author: ""
    },
    {
      quote:
        "Does the press violate the privacy of famous people?",
      author: ""
    },
    {
      quote:
        "Should testing on animals be legal?",
      author: ""
    },
    {
      quote: "Does social media violate our privacy?",
      author: ""
    },
    {
      quote:
        "Vaping is less harmful than smoking cigarettes.",
      author: ""
    },
    {
      quote:
        "Is the Turkish education system perfect for society?",
      author: ""
    },
    {
      quote:
        "Should the racing industry be forced to use biofuels?",
      author: ""
    },
    {
      quote:
        "Is it good that same-sex couples are able to marry?",
      author: ""
    },
    {
      quote:
        "Does boredom lead to trouble?",
      author: ""
    },
    {
      quote:
        "Does religion cause war?",
      author: ""
    },
    {
      quote:
        "Is homework harmful or helpful?",
      author: ""
    },
    {
      quote:
        "Should rich people be required to pay more taxes?",
      author: ""
    },
    {
      quote:
        "Are schools and teachers responsible for low test scores?",
      author: ""
    },
    {
      quote:
        "Should parents be able to modify their unborn children?",
      author: ""
    },
    {
      quote:
        "Do GMOs help or harm people?",
      author: ""
    },
    {
      quote:
        "Should self-driving cars be legal?",
      author: ""
    },
    {
      quote:
        "Is it ethical to replace human workers with automation?",
      author: ""
    },
    {
      quote:
        "Should there be laws against using cell phones while driving?",
      author: ""
    },
    {
      quote:
        "Should sports be segregated by gender?",
      author: ""
    },
     {
      quote:
        "Should religious organizations have to pay taxes?",
      author: ""
    },
     {
      quote:
        "Should religious clubs be allowed in schools?",
      author: ""
    },
    {
      quote:
        "Should religion be taught in schools?",
      author: ""
    },
    {
      quote:
        "Should assisted suicide be legal?",
      author: ""
    },
    {
      quote:
        "Should dietary supplements and weight loss items like teas be allowed to advertise through influencers?",
      author: ""
    },
    {
      quote:
        "Should people in prison be allowed to vote?",
      author: ""
    },
    {
      quote:
        "Should sex work be legalized?",
      author: ""
    },
    {
      quote:
        "Should the death penalty be legal?",
      author: ""
    },
     {
      quote:
        "Should unpaid internships be legal?",
      author: ""
    },
    {
      quote:
        "Should minimum wage be increased?",
      author: ""
    },
    {
      quote:
        "Is universal basic income a good idea?",
      author: ""
    },
    {
      quote:
        "Should corporations have a higher or lower tax rate?",
      author: ""
    },
    {
      quote:
        "Are school uniforms a good idea?",
      author: ""
    },
    {
      quote:
        "Should PE affect a student’s grades?",
      author: ""
    },
    {
      quote:
        "Should college be free?",
      author: ""
    },
    {
      quote:
        "Should students be taught comprehensive sex ed?",
      author: ""
    },
    {
      quote:
        "Should graffiti be considered art or vandalism?",
      author: ""
    },
    {
      quote:
        "Should books with objectionable words be banned?",
      author: ""
    },
    {
      quote:
        "Should content on YouTube be better regulated?",
      author: ""
    },
    {
      quote:
        "Is art education important?",
      author: ""
    },
    {
      quote:
        "Is reading e-books better than reading paper ones?",
      author: ""
    },
    {
      quote:
        "Should rich people help the poor?",
      author: ""
    },
    {
      quote:
        "Is a highly competitive environment suitable for students or employees?",
      author: ""
    },
    {
      quote:
        "Are standardized tests an effective way to assess someone’s knowledge?",
      author: ""
    },
    {
      quote:
        "Does the education system prepare students for real-world life?",
      author: ""
    },
    {
      quote:
        "If a child doesn’t like to study, is it acceptable to force him or her?",
      author: ""
    },
    {
      quote:
        "Should guns be allowed in Turkey?",
      author: ""
    },
    {
      quote:
        "Should people take tests before becoming parents?",
      author: ""
    },
    {
      quote:
        "Should students be provided with free mental therapy?",
      author: ""
    },
    {
      quote:
        "Can humanity continue progressing without the internet?",
      author: ""
    },
    {
      quote:
        "Will electronic money ever replace paper money?",
      author: ""
    },
    {
      quote:
        "Is excessive exposure to the internet ruining childhood?",
      author: ""
    },
    {
      quote:
        "Is it unethical to deny benefits to illegal immigrants?",
      author: ""
    },
    {
      quote:
        "Should illegal immigrants be given access to public school education?",
      author: ""
    },
    {
      quote:
        "Are people naturally good or evil?",
      author: ""
    },
    {
      quote:
        "Is being honest always the right thing to do?",
      author: ""
    },
    {
      quote:
        "Is there a moral duty for humans to take care of the environment?",
      author: ""
    },
    {
      quote:
        "Should everyone have the same perception of right and wrong?",
      author: ""
    },
    {
      quote:
        "Is it ethical to make health decisions with long-term or permanent effects on children?",
      author: ""
    },
    {
      quote:
        "Should the elderly decide whether they will go to a senior care center or their families?",
      author: ""
    },
    {
      quote:
        "Does keeping animals in zoos more harmful or beneficial to the animals?",
      author: ""
    },


  ];

  const btn = document.getElementById("generate-btn");

  btn.addEventListener("click", function() {
    let random = Math.floor(Math.random() * quotes.length);
    console.log(random);

    document.getElementById("quote").textContent = quotes[random].quote;
    document.querySelector(".author").textContent = quotes[random].author;
  });
})();
