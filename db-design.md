


## USER:
  - ID (int)  [PK]
  - Name  (str)
  - Email (str)
  - UserType (hitcher | hiker)
  - Gender (M | F | O)
  - Mobile (int)
  - Address (str)
  - DOB (date|str)
  - Password  (str)

  - ~Passport/NID (int|str)

## hitcher: provider  
  - 

## hiker: consumer
  - 
  
## Car Registration
  - HitcherId (str) [FK]
  - RegistrationNumber (int) [PK]
  - CarType (bike|sedan|minivan|...)
  - RegistrationYear (str)
  - ~CarImageUrl(4 from 4 sides)  (str: image-refs-in-filesystem)

## Journey
  - JourneyId (int)
  - Source (str)
  - Destination (str)
  - HitcherId (str)
  - TotalBill (int)

## HikerJourney
  - HikerId (str)
  - JourneyId (int)
  - Bill  (int)

