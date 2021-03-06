/// <reference types="cypress" />

describe("Login", () => {
  beforeEach(() => {
    cy.visit("/login");
    cy.fixture("registeredUser").as("registeredUser");
  });

  it("login With registered email and correct password for student", () => {
    cy.get("@registeredUser").then((registeredUser) => {
      cy.login(registeredUser[0].email, registeredUser[0].password);
    });
  });
/*
  it("should not login With unregistered email and correct password", () => {
    cy.get("@registeredUser").then((registeredUser) => {
      cy.login("testemail@yopmail.com", registeredUser[0].password);
    });
  });

  it("should not login With registered email and incorrect password", () => {
    cy.get("@registeredUser").then((registeredUser) => {
      cy.login(registeredUser[1].email, "dummypassword");
    });
  });*/
});
