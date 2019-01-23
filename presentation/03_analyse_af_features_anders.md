<!-- .element: data-background-video="images/animations/particle.mov" data-background-video-loop="true" data-background-video-muted="true" -->
<br>

# Analyse af features

Anders Karlsen

Note:
**Anders** vil nu snakke effektiviteten af vores forskelige features

--------------------------------------------------------------------------------

## Data for features
 - Når vi kigger på dataet fokuserer vi primært på precision, da den bruges til at "vægte" i naive bayes clasification.

 

| feature                 | p(cb | f) / Precision | p(f)   | Rcalll |
|-------------------------|-----------------------|--------|--------|
| caps                    | 1                     | 0.0994 | 0.0361 |
| special_words           | 0.9565                | 0.2018 | 0.1267 |
| special_punctuation     | 0.8333                | 0.1024 | 0.0602 |
| adverbs                 | 0.7647                | 0.0361 | 0.0737 |
| Low_average_word_length | 0.6716                | 0.0693 | 0.2629 |
| Pronouns                | 0.6508                | 0.1898 | 0.2391 |
| Stop_words              | 0.5464                | 0.2922 | 0.3094 |
| is_short                | 0.5294                | 0.0512 | 0.1052 |
| no_numbers              | 0.5176                | 0.8554 | 0.8605 |
| no long words           | 0.5152                | 0.0181 | 0.0993 |

 --------------------------------------------------------------------------------

## Generelle observationer
 - features der bruges mindre, har generelt en højere precision

 



--------------------------------------------------------------------------------

## sammenligning med potthast
 - Vansklighed med direkte sammenligning, da de måler på grupper af features, og vi måler på individuelle

 - Da de enkelte features resultater er binærer, har vi ikke mulighed for at justerer på threshold i vores data.

- generelt ser vi en stor succes i word 1-grams og character 1-grams.

- Effekt af længde er mindre udskelt.
