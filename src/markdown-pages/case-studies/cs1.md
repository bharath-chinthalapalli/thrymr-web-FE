---
slug: "fintech.."
date: "2020-12-14"
key: "case"
excerpt: "Receiving large sums of money overseas from close to 100 or more accounts is a common practice – people work with clients...."
title: "Fintech (Virtual Accounts & High Value Transactions)"
thumb: ../../images/case-studies/transaction-testing.jpg
featuredImage: images/case-studies/transaction-testing.jpg
---

#### Project Overview

Thrymr Software has had the opportunity to work with
one of the most technologically advanced banks in the
world for direct payments integration for one of our
clients. The client is an online, global marketplace engaged
in eCommerce and delivery of allied services. Thrymr
software successfully designed, developed, tested and
deployed the requisite tech infrastructure for the client to
execute this integration.

#### Problem Statement

Receiving large sums of money overseas from close to 100 or more accounts is a common practice

- people work with clients from across the world and money transfers have become a necessity. Using bank services is the first option that springs to mind when it comes to money transfers. Although all banks have their own policies for money transfers, one thing is always the same.
- charges that everyone have to pay. In addition to that, banks also charge them with hidden fees that occur in the form of unfavorable currency exchange rates.
  Apart from this managing inward payment from 100’s of
  accounts seems quite rootless.
  So our solutions have answered everything in an effective manner.

- Hidden currency conversion fees is upto $4,500 when transferring $100,000 from one currency to other, while stated fee is just $15.

- Different type of fees including a transaction fee from 2% to 6%, and a charge back fee.
- With one physical bank account for all the payments and collections, it is a challenge for them to keep track of payments from 100 or more accounts.

- Client look to use bank-level encryption to keep data safe and verifies recipient’s identity.

# Solution & Implementation

##### INWARD REMITTANCE/ VIRTUAL ACCOUNTS

1. Inward remittances are handled via Virtual Accounts (VA)
2. These are virtual/logical accounts bearing individual/unique VA number, ultimately linked to one real bank account of the client.
3. Each customer is allotted his respective VA number for him to make payments into.
4. All payments made to multiple VAs are ultimately credited into the client's one real bank account with which all the VAs are linked. The system is similar to credit cards bill payments made by retail credit card holders.
5. The VA number is a 16 digit numeric value with the first 6 digits allotted by the bank (which uniquely identifies the client) and the remaining 10 digits assigned by the client at its discretion to individual customers or invoices.

###### Tech Integration

The client’s and the bank’s systems interact with each other via encrypted CSV files sent over the SFTP protocol. As customers make payments into their respective virtual accounts, the bank notifies these transactions by transferring to the client, at regular frequency, a csv file
which carries transaction details like the va number, amount paid, date etc. thereby notifying the client of the payment made into the respective VA. Thus, the client is kept updated about the payment status of its customers and invoices.

###### Security

The transfer of the CSV files happens over SFTP from pre-filtered, whitelisted IPs from each end. Moreover the files themselves are encrypted using the OpenPGP encryption standard using secure public private RSA keys.

###### OUTWARD REMITTANCE/ ISO 20022

The client being a marketplace of goods and services, needs to make outward payments to suppliers of goods and services.

###### Tech Integration

To make payments to external bank accounts, the client’s system sends an encrypted XML file to the bank’s system over the SFTP protocol and received acknowledgment about the payment status via encrypted
XMLs sent to the client’s system by the bank. These XML files strictly conform to the ISO 20022 standard of payment messages with exhaustive checks on both sides ascertaining the validity of the data and structure of the files.

###### Security

The transfer of the XML files happens over SFTP from pre-filtered, whitelisted IPs from each end. Moreover the files themselves are encrypted using the OpenPGP encryption standard using secure public private RSA keys.

## Results

Use of technology tools and defense of confidential information against
internal and external, malicious and threats.

## Synopsis

From an Thrymr’s perspective, we believe the concept of virtual accounts and payments through virtual account management will grow in importance in the immediate future and will definitely be high on agenda with leading transaction banks.This solutions effectively reduces transaction fees with any
other unexpected charges.
