
library(dplyr)
library(skimr)
library(tidyr)
library(ggplot2)
library(gridExtra)
##------------------------------ DATA SETS ------------------------------ 

## daily activity data
daily_activity <- read.csv("dailyActivity_merged.csv")

## hourly data

# uniting hourly calories, intensities and steps data sets
hourly_activity <- inner_join(inner_join(read.csv("hourlyCalories_merged.csv"),
                                         read.csv("hourlyIntensities_merged.csv")
                                         ),
                              read.csv("hourlySteps_merged.csv")
                              )
## Weight data

weightlog_info <- read.csv("weightLogInfo_merged.csv")
##------------------------------ Data set Cleaning ------------------------------ 


## Daily_Activity Data set

# viewing data
str(daily_activity)
colnames(daily_activity)
skim_without_charts(daily_activity)

# splitting date and changing columns to integer from character

# splitting columns
daily_activity <- separate(daily_activity,ActivityDate,c("Month","Day","Year"),sep = "/")

# columns from character to integer 
columns_to_integers <- c("Day","Year")
daily_activity[columns_to_integers] <- lapply(daily_activity[columns_to_integers], as.integer)

# changing numeric month numbers to character
daily_activity$Month[daily_activity$Month == "4"] <- "April"
daily_activity$Month[daily_activity$Month == "5"] <- "May"

## Hourly activity Data set

# viewing data
str(hourly_activity)
colnames(hourly_activity)
skim_without_charts(hourly_activity)

# splitting date and changing columns to integer from character

# splitting columns
hourly_activity <- separate(hourly_activity,ActivityHour,c("MDY","Time","AM_PM"),sep = " ")
hourly_activity <- separate(hourly_activity,MDY,c("Month","Day","Year"),sep = "/")
hourly_activity <- separate(hourly_activity,Time,c("Hour","Minute","Second"),sep = ":")

# columns from character to integer 
columns_to_integers3 <- c("Day","Year","Hour","Minute","Second")
hourly_activity[columns_to_integers3] <- lapply(hourly_activity[columns_to_integers3], as.integer)

# changing numeric month numbers to character 
hourly_activity$Month[hourly_activity$Month == "4"] <- "April"
hourly_activity$Month[hourly_activity$Month == "5"] <- "May"

# deleting unnecessary columns 
hourly_activity <- hourly_activity %>%
  select(-Minute,-Second)


## weight log Data set 

# viewing data
str(weightlog_info)
colnames(weightlog_info)
skim_without_charts(weightlog_info)

# splitting date and changing columns to integer from character

# splitting columns
weightlog_info <- separate(weightlog_info,Date,c("MDY","Time","AM_PM"),sep = " ")
weightlog_info <- separate(weightlog_info,MDY,c("Month","Day","Year"),sep = "/")
weightlog_info <- separate(weightlog_info,Time,c("Hour","Minute","Second"),sep = ":")

# columns from character to integer 
columns_to_integers4 <- c("Day","Year","Hour","Minute","Second")
weightlog_info[columns_to_integers4] <- lapply(weightlog_info[columns_to_integers4], as.integer)

# changing numeric month numbers to character 
weightlog_info$Month[weightlog_info$Month == "4"] <- "April"
weightlog_info$Month[weightlog_info$Month == "5"] <- "May"

# deleting unnecessary columns 
weightlog_info$Fat[is.na(weightlog_info$Fat)] <- 0

#------------------------------ EDA Analysis ------------------------------ 

#---------------Daily Activity---------------
str(daily_activity)
mean(daily_activity$TotalSteps)

# Distance analysis 
Sedentary_Active_Distance <- ggplot(daily_activity,
                                    aes(Month,
                                        SedentaryActiveDistance
                                        )
                                    )+geom_boxplot()

light_Active_Distance <- ggplot(daily_activity,
                                aes(Month,
                                    LightActiveDistance
                                    )
                                )+geom_boxplot()

Moderately_Active_Distance <- ggplot(daily_activity,
                                aes(Month,
                                    ModeratelyActiveDistance
                                    )
                                )+geom_boxplot()

Very_Active_Distance <- ggplot(daily_activity,
                                     aes(Month,
                                         VeryActiveDistance
                                         )
                                     )+geom_boxplot()
grid.arrange(Sedentary_Active_Distance,light_Active_Distance,
             Moderately_Active_Distance,Very_Active_Distance,
             ncol = 2)

# Distance analysis continued .....
Sedentary_Active_Distance2 <- ggplot(daily_activity,
                                     aes(Month,
                                         SedentaryActiveDistance
                                         )
                                     )+geom_col()
Light_Active_Distance2 <- ggplot(daily_activity,
                                     aes(Month,
                                         LightActiveDistance
                                         )
                                     )+geom_col()
Moderately_Active_Distance2 <- ggplot(daily_activity,
                                     aes(Month,
                                         ModeratelyActiveDistance
                                         )
                                     )+geom_col()
Very_Active_Distance2 <- ggplot(daily_activity,
                                     aes(Month,
                                         VeryActiveDistance
                                         )
                                     )+geom_col()
grid.arrange(Sedentary_Active_Distance2,Light_Active_Distance2,
             Moderately_Active_Distance2,Very_Active_Distance2,
             ncol = 2)

# Time analysis 
Sedentary_Minutes <- ggplot(daily_activity,
                            aes(Month,SedentaryMinutes
                                )
                            )+geom_boxplot()
Lightly_Active_Minutes <- ggplot(daily_activity,
                            aes(Month,LightlyActiveMinutes
                                )
                            )+geom_boxplot()
Fairly_Active_Minutes <- ggplot(daily_activity,
                            aes(Month,FairlyActiveMinutes
                                )
                            )+geom_boxplot()
Very_Active_Minutes <- ggplot(daily_activity,
                            aes(Month,VeryActiveMinutes
                                )
                            )+geom_boxplot()

grid.arrange(Sedentary_Minutes,Lightly_Active_Minutes,
             Fairly_Active_Minutes,Very_Active_Minutes,
             ncol = 2)

# Time analysis continued
Sedentary_Minutes2 <- ggplot(daily_activity,
                            aes(Month,SedentaryMinutes)
                            )+geom_col()
Lightly_Active_Minutes2 <- ggplot(daily_activity,
                                 aes(Month,LightlyActiveMinutes
                                     )
                                 )+geom_col()
Fairly_Active_Minutes2 <- ggplot(daily_activity,
                                aes(Month,FairlyActiveMinutes
                                    )
                                )+geom_col()
Very_Active_Minutes2 <- ggplot(daily_activity,
                              aes(Month,VeryActiveMinutes
                                  )
                              )+geom_col()

grid.arrange(Sedentary_Minutes2,Lightly_Active_Minutes2,
             Fairly_Active_Minutes2,Very_Active_Minutes2,
             ncol = 2)

# subset of daily activity data set
subsetof_dailyactivity_April <- subset(daily_activity,daily_activity$Month == "April")
subsetof_dailyactivity_May <- subset(daily_activity,daily_activity$Month == "May")

Total_steps <- ggplot(daily_activity,
                      aes(Day,TotalSteps
                          )
                      )+geom_col()
Total_steps

##----------------- Hourly dataset ---------------
AM_PM <- ggplot(hourly_activity,
                aes(AM_PM,StepTotal
                    )
                )+geom_col()
AM_PM
subset_of_hourly_AM <- subset(hourly_activity,AM_PM == "AM")
subset_of_hourly_PM <- subset(hourly_activity,AM_PM == "PM")

TimeofDay_AM <- ggplot(subset_of_hourly_AM,
                    aes(Hour,StepTotal
                        )
                    )+geom_col()+
  labs(x="AM")

TimeofDay_PM <- ggplot(subset_of_hourly_PM,
                       aes(Hour,StepTotal
                           )
                       )+geom_col()+
  labs(x="PM")

grid.arrange(TimeofDay_AM,
             TimeofDay_PM,
             ncol = 2)
str(subset_of_hourly_AM)
##----------------- Weight data set ---------------
BMI <- ggplot(weightlog_info,
              aes(BMI)
              )+
  geom_histogram(breaks=seq(20,30,by=0.25)
                 )+
  labs(title = "BMI Histogram")
BMI








