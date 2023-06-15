networks="bsc avax fantom polygon arbitrum optimism ethereum"

for network in $networks;
do
npm run codegen_${network};
# npm run build_${network};
# npm run deploy_${network}_production;
# npm run deploy_${network}_staging;
npm run deploy_${network}_testing;
done
