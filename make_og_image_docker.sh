docker build -t og-image-generator .
mkdir -p /tmp/homepage
chmod a+w /tmp/homepage
docker run -v /tmp/homepage:/tmp --security-opt seccomp=unconfined --rm -t og-image-generator yarn make-og-image
mv /tmp/homepage/og-image.png _site
