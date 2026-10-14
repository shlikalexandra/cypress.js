describe('Account login and register tests', function () {
    it('Positive case: register account', function () {
        cy.visit('https://automationteststore.com/');
        cy.get('#customer_menu_top > li > a').click();
        cy.get('#accountFrm > fieldset > .btn').click();
        cy.get('#AccountFrm_firstname').type('Alexandra');
        cy.get('#AccountFrm_lastname').type('Schlick');
        cy.get('#AccountFrm_email').type('sasha6@neonwarden.com');
        cy.get('#AccountFrm_address_1').type('Ile street');
        cy.get('#AccountFrm_city').type('Astana');
        cy.get('#AccountFrm_country_id').select('Kazakhstan').should('have.value', '109');
        cy.get('#AccountFrm_postcode').type('010009');
        cy.get('#AccountFrm_zone_id').select('Astana City').should('have.value', '1720');
        cy.get('#AccountFrm_loginname').type('AlexandraSchlick');
        cy.get('#AccountFrm_password').type('Alexandra123');
        cy.get('#AccountFrm_confirm').type('Alexandra123');
        cy.get('#AccountFrm_newsletter1').check();
        cy.get('#AccountFrm_agree').check();
        cy.get('#AccountFrm > div.form-group > div > div > button').click();
        cy.get('.maintext').should('contain', 'Your Account Has Been Created!');
    });

    it('Positive case: login account', function () {
        cy.visit('https://automationteststore.com/');
        cy.get('#customer_menu_top > li > a').click();
        cy.get('#loginFrm_loginname').type('AlexandraSchlick');
        cy.get('#loginFrm_password').type('Alexandra123');
        cy.get('#loginFrm > fieldset > .btn').click();
        cy.get('.maintext').should('contain', 'My Account');
    });

    it('Positive case: logout account', function () {
        cy.visit('https://automationteststore.com/');
        cy.get('#customer_menu_top > li > a').click();
        cy.get('#loginFrm_loginname').type('AlexandraSchlick');
        cy.get('#loginFrm_password').type('Alexandra123');
        cy.get('#loginFrm > fieldset > .btn').click();
        cy.get('.maintext').should('contain', 'My Account');
        cy.get('.side_account_list > :nth-child(10) > a').click();
        cy.get('.maintext').should('contain', 'Account Logout');
    });

    it('Negative case: login account with wrong password', function () {
        cy.visit('https://automationteststore.com/');
        cy.get('#customer_menu_top > li > a').click();
        cy.get('#loginFrm_loginname').type('AlexandraSchlick');
        cy.get('#loginFrm_password').type('Alexandra1234');
        cy.get('#loginFrm > fieldset > .btn').click();
        cy.get('.alert').should('contain', 'Error: Incorrect login or password');
    });

    it('Negative case: login account with wrong username', function () {
        cy.visit('https://automationteststore.com/');
        cy.get('#customer_menu_top > li > a').click();
        cy.get('#loginFrm_loginname').type('AlexandraSchlick1');
        cy.get('#loginFrm_password').type('Alexandra123');
        cy.get('#loginFrm > fieldset > .btn').click();
        cy.get('.alert').should('contain', 'Error: Incorrect login or password');
    });

    it('Negative case: login account with empty fields', function () {
        cy.visit('https://automationteststore.com/');
        cy.get('#customer_menu_top > li > a').click();
        cy.get('#loginFrm_loginname').type(' ');
        cy.get('#loginFrm_password').type(' ');
        cy.get('#loginFrm > fieldset > .btn').click();
        cy.get('.alert').should('contain', 'Error: Incorrect login or password');
    });

    it('Positive case: change password', function () {
        cy.visit('https://automationteststore.com/');
        cy.get('#customer_menu_top > li > a').click();
        cy.get('#loginFrm_loginname').type('AlexandraSchlick');
        cy.get('#loginFrm_password').type('Alexandra123');
        cy.get('#loginFrm > fieldset > .btn').click();
        cy.get('.nav-dash > :nth-child(2) > a').click();
        cy.get('#PasswordFrm_current_password').type('Alexandra123');
        cy.get('#PasswordFrm_password').type('Alexandra1234');
        cy.get('#PasswordFrm_confirm').type('Alexandra1234');
        cy.get('.col-md-12 > .btn-orange').click();
        cy.get('.alert').should('contain', 'Success: Your password has been successfully updated.');
    });

    it('Negative case: login account with the wrong password', function () {
        cy.visit('https://automationteststore.com/');
        cy.get('#customer_menu_top > li > a').click();
        cy.get('#loginFrm_loginname').type('AlexandraSchlick');
        cy.get('#loginFrm_password').type('Alexandra123');
        cy.get('#loginFrm > fieldset > .btn').click();
        cy.get('.alert').should('contain', 'Error: Incorrect login or password');
    });
});