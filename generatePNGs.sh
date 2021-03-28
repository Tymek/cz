mkdir -p ./public/logos/png
rm public/logos/png/*
magick mogrify \
  -verbose \
  -path public/logos/png \
  -resize 128x128 \
  -format png \
  -background none \
  -gravity center \
  -extent 128x128 \
  public/logos/svg/*
