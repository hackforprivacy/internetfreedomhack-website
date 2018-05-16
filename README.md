# Internet Freedom Hack
Currently in development at https://internetfreedomhack.netlify.com

Continuously deployed via Netlify.

Based on [Type Theme](https://rohanchandra.github.io/type-theme/)

---
## Development setup

1. Install Docker and docker-compose
2. Run `docker-compose up -d`
3. Website should be available at [http://localhost:4000](http://localhost:4000). It will auto-regenerate on changes.

### Troubleshooting 

If it doesn't start successfully or stops auto-regenerating, check the logs with `docker logs internetfreedomhack-website_site_1`.

### Changing `_config.yml`

If you make changes to Jekyll's `_config.yml` you'll need to re-build: `docker-compose exec site jekyll build`.