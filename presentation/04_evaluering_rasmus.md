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

--------------------------------------------------------------------------------

### Visualisering

<div id="ROCAUC_container">

</div>

Note:
*Controls:* Q-E -> threshold, A-D -> positive, Z-X -> negative, R -> reset.

--------------------------------------------------------------------------------

### Vores data

![adskillelsesgraf](images/fordeling.png) <!-- .element: class="plain" -->

--------------------------------------------------------------------------------

### Normalfordelt

![normalfoldeling af data](images/normalfordeling.png) <!-- .element: class="plain" -->
