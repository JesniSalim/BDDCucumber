Feature:Register

Scenario: verify Register functionality

Given I should have navigate to application
Then I should click on Register menu
Then I should enter the Contact Information
     |Jesni|AS|9947865210|jesni123@gmail.com|
Then I should enter the Mailing Information
     |As villa|Trivandrum|kerala|695142|INDIA|
And  I should enter the User Information
     |JesniJes|jesni123|jesni123|
Then I should click on submit menu     
