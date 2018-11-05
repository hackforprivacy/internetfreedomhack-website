---
layout: page
---

{% for idea in site.ideas %}
{% include idea.html ideas=idea %}
{% endfor %}
