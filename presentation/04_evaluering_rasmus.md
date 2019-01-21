<!-- .element: data-background-video="images/animations/particle.mov" data-background-video-loop="true" data-background-video-muted="true" -->
<br>

# Evaluering

Rasmus Tollund

Note:
**Rasmus** vil nu snakke...

--------------------------------------------------------------------------------

## TPR og FPR

<div class="fragment align-left">
    *True Positive Rate*
    $$TPR = \frac{TP}{TP+FN}$$
</div>

<div class="fragment align-right">
    *False Positive Rate*
    $$FPR = \frac{FP}{FP+TN}$$
</div>

Note:
*TPR* er sandsynligheden for at et tilfældig positivt element bliver klassificeret som positiv.

*FPR* er sandsynligheden for at et tilfældig negativt element bliver klassificeret som positivt.

--------------------------------------------------------------------------------

## ROC grafer

*Receiver Operating Characteristics*

Plot af TPR som funktion af FPR

Note:
Blev brugt til at analysere radar signaler i anden verdenskrig.


--------------------------------------------------------------------------------

### Visualisering

<div id="ROCAUC_container">

</div>

Note:
*****

| **Controls** | |
| :---: | :------------ |
| `Q` `E` | &pm;threshold |
| `A` `D` | &pm;positive  |
| `Z` `X` | &pm;negative  |
|   `R`   | reset         |

--------------------------------------------------------------------------------

### Vores data

![adskillelsesgraf](images/fordeling.png) <!-- .element: class="plain" -->

--------------------------------------------------------------------------------

### Vores ROC-graf

![ROC graf](images/ROC_graf.png)

--------------------------------------------------------------------------------

### Normalfordelt

![normalfoldeling af data](images/normalfordeling.png) <!-- .element: class="plain" -->
--------------------------------------------------------------------------------

### TPR og FPR i sandsynlighedstæthedsfunktioner

![TPR og FPR i sandsynlighedstæthedsfunktioner](images/normalfordeling_fpr_tpr.png) <!-- .element: class="plain"  style="height:45vh" -->
<div class="align-left">
    $$TPR=\int_g^1 p(g) dg$$
</div>
<div class="align-right">
    $$FPR=\int_g^1 n(g) dg$$
</div>
