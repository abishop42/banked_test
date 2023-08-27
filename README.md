# banked_test

To run tests

    npm run test:demo

# Notes
 
Due to sample going to use configuration files to control env settings, ideally would look at setting up for both default check for environment variables and override with local file.   Need this for times when we could be developing locally.

Going to use jest with puppeteer for this.

Disabling test coverage due


## Sample data

| BSB | Account Number | Details |
| --- | -------------- | -------- |
| 111-114 | 12345678 | Mocks successful creation of Agreement with delay. Mocks successful payment with delay. |
| 111-114 | <AD><PD>11 | Mocks successful creation of Agreement with delay (AD seconds). Mocks successful payment with delay (PD seconds). |
| 111-114 | AD><PD>12 | Mocks failure creating an agreement.|
| 111-114 | AD><PD>24 | Mocks payment failure due to Insufficient funds |


# Tests

Based of the information at hand the flows we can do are

- success payment flow
- fail to create an agreement
- fail to make payment due to insufficent fundds

## Potential other tests


- timeout due response for payment taking to long
- if mock holds state then we could look at making multiple payments with same account under new account flow
- look at using the other checkboxes returning and prefilled customer 
- success payment flow with a delay 
- check for errors if data input is incorrect


## initial steps for setup
1. goto https://demo.banked.com/new
2. checkbox selected to new customer 
3. set region to AU
4. click on create hosted checkout
5. wait for page to load


