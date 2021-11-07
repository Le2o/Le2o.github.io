toogleLang: function () {
      this.lang = this.lang === 'en' ? 'ru' : 'en';
      var queryParams = new URLSearchParams(window.location.search);
      queryParams.set("lang", this.lang);
      window.history.replaceState(null, null, "?" + queryParams.toString());
      this.init();
    }
