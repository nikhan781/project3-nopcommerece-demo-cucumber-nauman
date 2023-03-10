Feature: Computer Test
  As user I want to explore Computer page of nop commerce website

  @sanity @regression
  Scenario: verify User Should Navigate To Computer Page Successfully
    Given I am on homepage
    When I click on Computer tab
    Then I should navigate to computer page successfully

  @smoke @regression
  Scenario: verify User Should Navigate To Desktops Page Successfully
    Given I am on homepage
    When I click on Computer tab
    And I click on Desktops link
    Then I should navigate to Desktops Page successfully

  @regression
  Scenario Outline: verify That User Should Build Your Own Computer And Add Them To Cart Successfully
    Given I am on homepage
    When I click on Computer tab
    And I click on Desktops link
    And I click on product name Build your own computer
    And I select processor "<processor>"
    And I select ram "<ram>"
    And I select hdd "<hdd>"
    And I select OS "<os>"
    And I select Software "<software>"
    And I click on add to cart button
    Then I should see product has been added to your shopping cart confirmation message

    Examples:
      | processor                                       | ram           | hdd               | os                      | software                   |
      | 2.2 GHz Intel Pentium Dual-Core E2200           | 8GB [+$60.00] | 400 GB [+$100.00] | Vista Premium [+$60.00] | Microsoft Office [+$50.00] |

