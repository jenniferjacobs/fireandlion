---
title: Portfolio
style: portfolio
---

# A selection of our work
{:.no_toc}

<ul class="page-toc">
	{% for category in site.data.categories %}
	{% assign category-slug = category[0] %}

		{% if site.categories.[category-slug] %}
			<li><a href="#{{ category-slug }}">{% if category[1].name %}{{ category[1].name }}{% endif %}</a></li>
		{% endif %}

	{% endfor %}
</ul>

<div class="posts-by-category">
{% for category in site.data.categories %}
{% capture category-slug %}{{ category[0] }}{% endcapture %}

	{% if site.categories.[category-slug] %}

		<h2 id="{{ category-slug }}">{% if category[1].name %}{{ category[1].name }}{% endif %}</h2>
		<p>{% if category[1].description %}{{ category[1].description | markdownify }}{% endif %}</p>
		<div class="post-excerpts">
			{% for post in site.categories.[category-slug] %}
			{% include post-excerpt.html %}
			{% endfor %}
		</div><!--.post-excerpts-->

	{% endif %}

{% endfor %}
</div><!--.posts-by-category-->
