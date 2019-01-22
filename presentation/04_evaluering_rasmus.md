<!-- .element: data-background-video="images/animations/particle.mov" data-background-video-loop="true" data-background-video-muted="true" -->
<br>

# Evaluering

Rasmus Tollund

Note:
**Rasmus** vil nu snakke...

--------------------------------------------------------------------------------

## TPR og FPR

- *True Positive Rate*
  <span class="aside">$$TPR = \frac{TP}{TP+FN}$$</span>
- *False Positive Rate*
  <span class="aside">$$FPR = \frac{FP}{FP+TN}$$</span>

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
<!-- .element: data-state="draw-roc" -->

### Visualisering

<div id="ROCAUC_container"></div>

Note:
*****

| **Controls** | |
| :-----: | :------------ |
| `Q` `E` | &pm;threshold |
| `A` `D` | &pm;positive  |
| `Z` `X` | &pm;negative  |
|   `R`   | reset         |

--------------------------------------------------------------------------------

![vores ROC graf](images/ROC_graf.png) <!-- .element: class="plain" -->

Note:
*****

**Vores ROC graf**

--------------------------------------------------------------------------------

![diskret sandsynlighedsfordeling](images/fordeling.png) <!-- .element: class="plain" -->

Note:
*****

**Vores data** *diskret sandsynlighedsfordeling*

--------------------------------------------------------------------------------

![normalfoldeling af data](images/normalfordeling.png) <!-- .element: class="plain" -->

Note:
*****

**Normalfordeling af data**

--------------------------------------------------------------------------------

![TPR og FPR i sandsynlighedstæthedsfunktioner](images/normalfordeling_fpr_tpr.png) <!-- .element: class="plain"  style="height:45vh" -->
<div class="align-left">
    $$TPR=\int\_{g\_0}^{\infty} p(g) dg$$
</div>
<div class="align-right">
    $$FPR=\int\_{g\_0}^{\infty} n(g) dg$$
</div>
