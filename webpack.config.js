import html from "./index.html";

module.exports = (phase, { defaultConfig }) => { 
	return { 
		/* Your custom Webpack 
		configuration goes here */
        module: {
            rules: [
              {
                test: /\.html$/i,
                loader: "html-loader",
              },
            ],
          },
	}; 
};
