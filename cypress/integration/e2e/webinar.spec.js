/// <reference types="cypress" />

describe("add webinar", () => {
  let educatorUser;
  before(function () {
    cy.fixture("educator").then(function (educator) {
      cy.deleteUser(educator.email);
      cy.addUser(educator);
      cy.verifyEmail(educator.email);
      educatorUser = educator;
    });
  });

  beforeEach(() => {
    cy.visit("login");
    cy.login(educatorUser.email, educatorUser.password);
  });

  it("with valid input values", () => {
    const webinar = {
      type: "Webinar",
      eventImage: "images/webinar.jpg",
      data: {
        mainTitle: "Block Chain Security",
        subTitle: "Blockchain",
        startTime: "00:00",
        endTime: "00:00",
        startDate: "2030-05-05",
        endDate: "2050-05-05",
        description:
          "The crypto currency is currently in use and have some serious security concerns due to its usage.",
        price: "100",
        redirectionUrl: "https://google.com/",
        presentor: "David Parker",
      },
    };
    cy.addWebinar(webinar);
  });

  after(() => {
    cy.deleteUser(educatorUser.email);
  });
});