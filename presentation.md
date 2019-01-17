# A307

### Automatisk klassifikation af clickbait

![aau logo](images/AAU_STUDENTERRAPPORT_white_rgb.png) <!-- .element: class="plain" -->

---

## Liste

- Første element <!-- .element: class="fragment" -->
- Andet element <!-- .element: class="fragment" -->
- Tredje element <!-- .element: class="fragment" -->

---

## Formler

Når $a \ne 0$, er der to løsninger til $ax^2 + bx + c = 0$, og de findes ved
$$x = {-b \pm \sqrt{b^2-4ac} \over 2a}.$$

Note: Rasmus laver lige nogle formler omkring ROC-AUC.

===

# KODESTYKKER

```c
int main(void)
{
    return 0;
}
```

---

<pre><code class="lang-c" data-trim data-noescape>
uint8_t <span class="fragment highlight-current-red">_get_feature_vector</span>(char str_in[], FeatureSet featureset)
{
    uint8_t i, feature_vector;

    for (i = 0; i < featureset.count; i++) {
        feature_vector <span class="fragment highlight-current-red"><<=</span> 1;
        feature_vector += featureset.features[i].<span class="fragment highlight-current-red">has_feature(str_in)</span>;
    }

    return feature_vector;
}
</code></pre>

Note: Et eksempel på et kodestykke med markeringer.

---

<pre><code class="lang-sh" data-trim data-noescape data-line-numbers="off">
<span class="hljs-built_in">&gt;</span><span class="hljs-meta">bin\classifier</span> <span class="hljs-function">train</span> <span class="hljs-string">"data/training.dataset"</span> <span class="hljs-attr">--print</span>
Features successfully trained.

Feature                    p(CB|F)   p(CB|!F)       p(F)
no_long_word                0.5152     0.4983     0.0994
low_average_word_length     0.6716     0.4566     0.2018
is_short                    0.5294     0.4966     0.1024
special_punctuation         0.8333     0.4875     0.0361
special_words               0.9565     0.4660     0.0693
pronouns                    0.6508     0.4647     0.1898
stop_words                  0.5464     0.4809     0.2922
adverbs                     0.7647     0.4857     0.0512
no_numbers                  0.5176     0.3958     <span class="fragment highlight-current-red">0.8554</span>
caps                        1.0000     0.4908     0.0181
</code></pre>

---

<div style="width: 20em; margin: 0 auto;">
<pre style="font-size: calc((20 / 0.6) * .01em);"><code class="lang-sh" data-trim data-noescape data-line-numbers="off">
<span class="hljs-built_in">&gt;</span><span class="hljs-meta">bin\classifier</span> <span class="hljs-function">test</span> <span class="hljs-string">"data/test.dataset"</span> <span class="hljs-attr">--print</span>

CLASSIFIER EVALUATION
<span>================================================================================</span>
Threshold   Accuracy    Precision   Recall      Fall-out    F1 score    MCC
<span>--------------------------------------------------------------------------------</span>
1.000000    0.5000      0.0000      0.0000      0.0000      0.0000      0.0000
0.002287    0.5070      1.0000      0.0141      0.0000      0.0278      0.0842
0.002169    0.5141      1.0000      0.0282      0.0000      0.0548      0.1195
0.002165    0.5211      1.0000      0.0423      0.0000      0.0811      0.1469
0.002035    0.5423      1.0000      0.0845      0.0000      0.1558      0.2100
0.002031    0.5493      1.0000      0.0986      0.0000      0.1795      0.2277
0.001926    0.5563      1.0000      0.1127      0.0000      0.2025      0.2443
0.001651    0.5634      1.0000      0.1268      0.0000      0.2250      0.2601
0.001556    0.5775      1.0000      0.1549      0.0000      0.2683      0.2898
0.001473    0.5845      1.0000      0.1690      0.0000      0.2892      0.3038
0.001453    0.6056      1.0000      0.2113      0.0000      0.3488      0.3437
0.001375    0.5986      0.9375      0.2113      0.0141      0.3448      0.3118
0.001290    0.6056      0.9412      0.2254      0.0141      0.3636      0.3254
0.001210    0.6268      0.9500      0.2676      0.0141      0.4176      0.3644
0.001201    0.6338      0.9524      0.2817      0.0141      0.4348      0.3769
0.001126    0.6479      0.9200      0.3239      0.0282      0.4792      0.3883
0.001114    0.6479      0.8889      0.3380      0.0423      0.4898      0.3769
0.001057    0.6549      0.8929      0.3521      0.0423      0.5051      0.3894
0.000991    0.6831      0.7955      0.4930      0.1268      0.6087      0.3959
0.000925    0.6901      0.8000      0.5070      0.1268      0.6207      <span class="fragment highlight-current-red" data-fragment-index="2">0.4087</span>
0.000861    0.6831      0.7826      0.5070      0.1408      0.6154      0.3913
0.000808    0.6901      0.7872      0.5211      0.1408      0.6271      0.4041
0.000804    0.6690      0.6875      0.6197      0.2817      0.6519      0.3397
0.000758    0.6690      0.6818      0.6338      0.2958      0.6569      0.3389
0.000755    0.6408      0.6351      0.6620      0.3803      0.6483      0.2819
0.000708    0.6268      0.5750      0.9718      0.7183      0.7225      0.3503
0.000615    0.6127      0.5656      0.9718      0.7465      0.7150      0.3239
0.000577    0.6197      0.5691      0.9859      0.7465      0.7216      0.3517
0.000541    0.5000      0.5000      1.0000      1.0000      0.6667      0.0000
<span>================================================================================</span>
ROC-AUC = <span class="fragment highlight-current-red" data-fragment-index="1">0.753918</span>
</code></pre>
</div>

===
<!-- .element: data-background-iframe="https://clickbait.dayenite.com" data-background-interactive data-state="show-controls" -->

===

# Tak