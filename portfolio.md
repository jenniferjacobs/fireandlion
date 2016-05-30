---
title: Portfolio
---

# A selection of our work

[Social impact](#social-impact)\\
[Visual identity](#visual-identity)\\
[Corporate publications](#corporate-publications)\\
[Literature](#literature)

## Social impact

At Fire and Lion we believe that every book has a mission: that is, every story has the power and responsibility to change the world. That mission is clearest when we work with social-impact projects and organisations, like MyConstitution, Book Dash, Worldreader, Bettercare, and the More Books Campaign.

{% for post in site.categories.social-impact %}
<a href="{{ post.url }}" title="{{ post.title }}">
<img src="../images/{{ post.image }}" alt="{{ post.title }}" class="thumbnail"></a>
{{ post.excerpt | remove: '<p>' | remove: '</p>' }} <a href="{{ post.url }}" title="{{ post.title }}">Read more</a>.
{% endfor %}

## Visual identity

Watershed, Oxflo, Fynbos, Stitch, Moja

{% for post in site.categories.visual-identity %}
    <li>{{ post.title }}</li>
{% endfor %}

## Corporate publications

UNCDF, TBWA, ICT Africa, CCT annual report, V&A report, Small Publishers’ Catalogue

{% for post in site.categories.corporate-publications %}
    <li>{{ post.title }}</li>
{% endfor %}

## Literature

Gordonia, A Writer’s Diary, Pleasure, The Yearning

{% for post in site.categories.literature %}
    <li>{{ post.title }}</li>
{% endfor %}
