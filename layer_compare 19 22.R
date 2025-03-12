library(tidyverse)
library(sf)

tct<-st_read("Data/GA_Tract_Poverty_Rate-18_22_51.geojson") %>%
  mutate(pop185=C17002_002+C17002_003+C17002_004+C17002_005+C17002_006)
sum(tct$pop185)

tct_old<-st_read("Data/old/Tract_poverty19_above51.geojson")
sum(tct_old$X185_Pov_Po)

zcta<-st_read("Data/GA_ZCTA_Poverty_rate-18_22_51.geojson")%>%
  mutate(pop185=C17002_002+C17002_003+C17002_004+C17002_005+C17002_006)
sum(zcta$pop185)

zcta_old<-st_read("Data/old/ZCTA_poverty19_above51.geojson")
sum(zcta_old$X185_Pov_Po)
