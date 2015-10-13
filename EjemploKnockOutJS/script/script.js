/**
 * Created by alejandro.rueda on 13/10/2015.
 */
var viewModel = {};
viewModel.countries = ko.observableArray();
viewModel.countriesIng = ko.observableArray();
viewModel.countriesEsp = ko.observableArray();
ko.applyBindings(viewModel);
$( document ).ready(function() {
    $.getJSON("https://restcountries.eu/rest/v1/all").then(function (countries) {
        $.each(countries, function () {
            viewModel.countries.push({
                name: ko.observable(this.name),
                capital: ko.observable(this.capital),
                alpha2Code: ko.observable("flags/"+this.alpha2Code+".png")
            });
        });
    });
});
var functionOne = function() {
    $("#home").removeClass("active");
    $("#ing").removeClass("active");
    $("#esp").addClass("active");
    $.getJSON("https://restcountries.eu/rest/v1/all").then(function (countries) {
        viewModel.countries.removeAll();
        viewModel.countriesEsp.removeAll();
        $.each(countries, function (index, country) {
            var countryObj = {
                languages : country.languages
            };
            $.each(countryObj.languages, function (i, val) {
                if(val === 'en')
                viewModel.countriesIng.push({
                    name: ko.observable(country.name),
                    capital: ko.observable(country.capital),
                    alpha2Code: ko.observable("flags/"+country.alpha2Code+".png")
                });
            });
        });
    });
};

var functionTwo = function() {
    $("#home").removeClass("active");
    $("#ing").removeClass("active");
    $("#esp").addClass("active");
    $.getJSON("https://restcountries.eu/rest/v1/all").then(function (countries) {
        viewModel.countries.removeAll();
        viewModel.countriesIng.removeAll();
        $.each(countries, function (index, country) {
            var countryObj = {
                languages : country.languages
            };
            $.each(countryObj.languages, function (i, val) {
                if(val === 'es')
                    viewModel.countriesEsp.push({
                        name: ko.observable(country.name),
                        capital: ko.observable(country.capital),
                        alpha2Code: ko.observable("flags/"+country.alpha2Code+".png")
                    });
            });
        });
    });
};