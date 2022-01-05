context("Recovery password", () => {
  it("Enters the landing page and tries to go to the password recovery page", () => {
    cy.visit("http://localhost:3000");
    cy.viewport(1440, 900);

    const user = "mail@mail.com";
    const password = "1234";

    cy.contains("Esqueceu a senha?").click();
    cy.get("input[name=email]").type(user);
    cy.get("button").click();
  });
});
context("Login", () => {
  it("Enters the landing page and tries to go login", () => {
    cy.visit("http://localhost:3000");
    cy.viewport(1440, 900);

    const user = "mail@mail.com";
    const password = "1234";

    cy.get("input[name=email]").type(user);
    cy.get("input[name=password]").type(password);

    cy.get("button").click();
  });
});

context("Sponsors", () => {
  it("Enters the dashboard page and tries to go sponsors page and fill the forms", () => {
    cy.visit("http://localhost:3000/dashboard");
    cy.viewport(1440, 900);

    const data = {
      name: "Nestle",
      cnpj: "03.778.130/0001-48",
      points: "120",
      contactName: "Jane Doe",
      contactEmail: "jane@mail.com",
      contactPhone: "11 91234-5678",
    };
    cy.contains("Patrocinadores").click();
    cy.get("button[name=addSponsor]").click();
    cy.get("input[name=name]").type(data.name);
    cy.get("input[name=cnpj]").type(data.cnpj);
    cy.get("input[name=points]").type(data.points);
    cy.contains("Indústria").click();
    cy.contains("Varejo").click();
    cy.contains("Shopping").click();
    cy.contains("Agência").click();
    cy.contains("Pré-pago").click();
    cy.contains("Pós-pago").click();
    cy.get("button[name=submit]").click();
    cy.get("input[name=contactName]").type(data.contactName);
    cy.get("input[name=contactEmail]").type(data.contactEmail);
    cy.get("input[name=contactPhone]").type(data.contactPhone);
    cy.get("button[name=cancel]").click();
    cy.get("button[name=submit]").click();
    cy.get("button[name=submit]").click();
    cy.get("button[name=brands]").click();
    cy.get("input[name=Maggi]").click();
    cy.get("input[name=Ninho]").click();
    cy.get("button[name=close]").click();
    cy.get("button[name=submit]").click();
  });
});
