//	HYPE.documents["header"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "header_Resources";
	var documentName = "header";
	var documentLoaderFilename = "header_hype_generated_script.js";

	// find the URL for this script's absolute path and set as the resourceFolderName
	try {
		var scripts = document.getElementsByTagName('script');
		for(var i = 0; i < scripts.length; i++) {
			var scriptSrc = scripts[i].src;
			if(scriptSrc != null && scriptSrc.indexOf(documentLoaderFilename) != -1) {
				resourcesFolderName = scriptSrc.substr(0, scriptSrc.lastIndexOf("/"));
				break;
			}
		}
	} catch(err) {	}

	// load HYPE.js if it hasn't been loaded yet
	if(typeof HYPE == "undefined") {
		if(typeof window.HYPE_DocumentsToLoad == "undefined") {
			window.HYPE_DocumentsToLoad = new Array();
			window.HYPE_DocumentsToLoad.push(HYPE_DocumentLoader);

			var headElement = document.getElementsByTagName('head')[0];
			var scriptElement = document.createElement('script');
			scriptElement.type= 'text/javascript';
			scriptElement.src = resourcesFolderName + '/' + 'HYPE.js';
			headElement.appendChild(scriptElement);
		} else {
			window.HYPE_DocumentsToLoad.push(HYPE_DocumentLoader);
		}
		return;
	}
	
	var attributeTransformerMapping = {"BorderColorRight":"ColorValueTransformer","BackgroundColor":"ColorValueTransformer","BorderWidthBottom":"PixelValueTransformer","WordSpacing":"PixelValueTransformer","BoxShadowXOffset":"PixelValueTransformer","Opacity":"FractionalValueTransformer","BorderWidthRight":"PixelValueTransformer","BorderWidthTop":"PixelValueTransformer","BoxShadowColor":"ColorValueTransformer","BorderColorBottom":"ColorValueTransformer","FontSize":"PixelValueTransformer","BorderRadiusTopRight":"PixelValueTransformer","TextColor":"ColorValueTransformer","Rotate":"DegreeValueTransformer","Height":"PixelValueTransformer","PaddingLeft":"PixelValueTransformer","BorderColorTop":"ColorValueTransformer","Top":"PixelValueTransformer","BackgroundGradientStartColor":"ColorValueTransformer","TextShadowXOffset":"PixelValueTransformer","PaddingTop":"PixelValueTransformer","BackgroundGradientAngle":"DegreeValueTransformer","PaddingBottom":"PixelValueTransformer","PaddingRight":"PixelValueTransformer","Width":"PixelValueTransformer","TextShadowColor":"ColorValueTransformer","BorderColorLeft":"ColorValueTransformer","ReflectionOffset":"PixelValueTransformer","Left":"PixelValueTransformer","BorderRadiusBottomRight":"PixelValueTransformer","LineHeight":"PixelValueTransformer","BoxShadowYOffset":"PixelValueTransformer","ReflectionDepth":"FractionalValueTransformer","BorderRadiusTopLeft":"PixelValueTransformer","BorderRadiusBottomLeft":"PixelValueTransformer","TextShadowBlurRadius":"PixelValueTransformer","TextShadowYOffset":"PixelValueTransformer","BorderWidthLeft":"PixelValueTransformer","BackgroundGradientEndColor":"ColorValueTransformer","BoxShadowBlurRadius":"PixelValueTransformer","LetterSpacing":"PixelValueTransformer"};

var scenes = [{"timelines":{"kTimelineDefaultIdentifier":{"framesPerSecond":30,"animations":[{"startValue":"1.000000","isRelative":true,"endValue":"1.000000","identifier":"Opacity","duration":1,"timingFunction":"easeinout","type":0,"oid":"5241B928-8349-41E2-92F9-0B9C1418528C-2262-00004DC629246EB5","startTime":0},{"startValue":"32px","isRelative":true,"endValue":"32px","identifier":"Left","duration":1,"timingFunction":"easeinout","type":0,"oid":"5241B928-8349-41E2-92F9-0B9C1418528C-2262-00004DC629246EB5","startTime":0},{"startValue":"207px","isRelative":true,"endValue":"39px","identifier":"Top","duration":1,"timingFunction":"easeinout","type":0,"oid":"5241B928-8349-41E2-92F9-0B9C1418528C-2262-00004DC629246EB5","startTime":0},{"startValue":"200px","isRelative":true,"endValue":"200px","identifier":"Height","duration":1,"timingFunction":"easeinout","type":0,"oid":"5241B928-8349-41E2-92F9-0B9C1418528C-2262-00004DC629246EB5","startTime":0},{"startValue":"434.667px","isRelative":true,"endValue":"434.667px","identifier":"Width","duration":1,"timingFunction":"easeinout","type":0,"oid":"5241B928-8349-41E2-92F9-0B9C1418528C-2262-00004DC629246EB5","startTime":0},{"startValue":"0px","isRelative":true,"endValue":"0px","identifier":"BoxShadowXOffset","duration":2.0333333015441895,"timingFunction":"easeinout","type":0,"oid":"5241B928-8349-41E2-92F9-0B9C1418528C-2262-00004DC629246EB5","startTime":0},{"startValue":"0px","isRelative":true,"endValue":"0px","identifier":"BoxShadowYOffset","duration":2.0333333015441895,"timingFunction":"easeinout","type":0,"oid":"5241B928-8349-41E2-92F9-0B9C1418528C-2262-00004DC629246EB5","startTime":0},{"startValue":"0px","isRelative":true,"endValue":"0px","identifier":"BoxShadowBlurRadius","duration":2.0333333015441895,"timingFunction":"easeinout","type":0,"oid":"5241B928-8349-41E2-92F9-0B9C1418528C-2262-00004DC629246EB5","startTime":0},{"startValue":"#000000","isRelative":true,"endValue":"#FFFFFF","identifier":"BoxShadowColor","duration":2.0333333015441895,"timingFunction":"easeinout","type":0,"oid":"5241B928-8349-41E2-92F9-0B9C1418528C-2262-00004DC629246EB5","startTime":0},{"startValue":"39px","isRelative":false,"endValue":"54px","identifier":"Top","duration":0.5,"timingFunction":"easeinout","type":0,"oid":"5241B928-8349-41E2-92F9-0B9C1418528C-2262-00004DC629246EB5","startTime":1},{"startValue":"1.000000","isRelative":false,"endValue":"1.000000","identifier":"Opacity","duration":0.83333325386047363,"timingFunction":"easeinout","type":0,"oid":"5241B928-8349-41E2-92F9-0B9C1418528C-2262-00004DC629246EB5","startTime":1},{"startValue":"32px","isRelative":false,"endValue":"32px","identifier":"Left","duration":0.83333325386047363,"timingFunction":"easeinout","type":0,"oid":"5241B928-8349-41E2-92F9-0B9C1418528C-2262-00004DC629246EB5","startTime":1},{"startValue":"200px","isRelative":false,"endValue":"200px","identifier":"Height","duration":0.83333325386047363,"timingFunction":"easeinout","type":0,"oid":"5241B928-8349-41E2-92F9-0B9C1418528C-2262-00004DC629246EB5","startTime":1},{"startValue":"434.667px","isRelative":false,"endValue":"434.667px","identifier":"Width","duration":0.83333325386047363,"timingFunction":"easeinout","type":0,"oid":"5241B928-8349-41E2-92F9-0B9C1418528C-2262-00004DC629246EB5","startTime":1},{"startValue":"54px","isRelative":false,"endValue":"46px","identifier":"Top","duration":0.33333325386047363,"timingFunction":"easeinout","type":0,"oid":"5241B928-8349-41E2-92F9-0B9C1418528C-2262-00004DC629246EB5","startTime":1.5},{"startValue":"46px","isRelative":false,"endValue":"54px","identifier":"Top","duration":0.20000004768371582,"timingFunction":"easeinout","type":0,"oid":"5241B928-8349-41E2-92F9-0B9C1418528C-2262-00004DC629246EB5","startTime":1.8333332538604736},{"startValue":"200px","isRelative":false,"endValue":"200px","identifier":"Height","duration":2.8333332538604736,"timingFunction":"easeinout","type":0,"oid":"5241B928-8349-41E2-92F9-0B9C1418528C-2262-00004DC629246EB5","startTime":1.8333332538604736},{"startValue":"434.667px","isRelative":false,"endValue":"435px","identifier":"Width","duration":2.8333332538604736,"timingFunction":"easeinout","type":0,"oid":"5241B928-8349-41E2-92F9-0B9C1418528C-2262-00004DC629246EB5","startTime":1.8333332538604736},{"startValue":"0.000000","isRelative":true,"endValue":"1.000000","identifier":"Opacity","duration":0.40000009536743164,"timingFunction":"easeinout","type":0,"oid":"23F6C632-5EA4-4381-A94B-9034DA79DF6A-2262-00004E8BFEAC3CCB","startTime":2.0333333015441895},{"startValue":"71px","isRelative":true,"endValue":"71px","identifier":"Height","duration":0.40000009536743164,"timingFunction":"easeinout","type":0,"oid":"23F6C632-5EA4-4381-A94B-9034DA79DF6A-2262-00004E8BFEAC3CCB","startTime":2.0333333015441895},{"startValue":"89px","isRelative":true,"endValue":"89px","identifier":"Left","duration":0.40000009536743164,"timingFunction":"easeinout","type":0,"oid":"23F6C632-5EA4-4381-A94B-9034DA79DF6A-2262-00004E8BFEAC3CCB","startTime":2.0333333015441895},{"startValue":"133px","isRelative":true,"endValue":"133px","identifier":"Top","duration":0.40000009536743164,"timingFunction":"easeinout","type":0,"oid":"23F6C632-5EA4-4381-A94B-9034DA79DF6A-2262-00004E8BFEAC3CCB","startTime":2.0333333015441895},{"startValue":"308px","isRelative":true,"endValue":"308px","identifier":"Width","duration":0.40000009536743164,"timingFunction":"easeinout","type":0,"oid":"23F6C632-5EA4-4381-A94B-9034DA79DF6A-2262-00004E8BFEAC3CCB","startTime":2.0333333015441895},{"startValue":"1.000000","isRelative":false,"endValue":"1.000000","identifier":"Opacity","duration":0.19999980926513672,"timingFunction":"easeinout","type":0,"oid":"23F6C632-5EA4-4381-A94B-9034DA79DF6A-2262-00004E8BFEAC3CCB","startTime":2.4333333969116211},{"startValue":"71px","isRelative":false,"endValue":"71px","identifier":"Height","duration":0.19999980926513672,"timingFunction":"easeinout","type":0,"oid":"23F6C632-5EA4-4381-A94B-9034DA79DF6A-2262-00004E8BFEAC3CCB","startTime":2.4333333969116211},{"startValue":"89px","isRelative":false,"endValue":"89px","identifier":"Left","duration":0.19999980926513672,"timingFunction":"easeinout","type":0,"oid":"23F6C632-5EA4-4381-A94B-9034DA79DF6A-2262-00004E8BFEAC3CCB","startTime":2.4333333969116211},{"startValue":"133px","isRelative":false,"endValue":"143px","identifier":"Top","duration":0.19999980926513672,"timingFunction":"easeinout","type":0,"oid":"23F6C632-5EA4-4381-A94B-9034DA79DF6A-2262-00004E8BFEAC3CCB","startTime":2.4333333969116211},{"startValue":"308px","isRelative":false,"endValue":"308px","identifier":"Width","duration":0.19999980926513672,"timingFunction":"easeinout","type":0,"oid":"23F6C632-5EA4-4381-A94B-9034DA79DF6A-2262-00004E8BFEAC3CCB","startTime":2.4333333969116211},{"startValue":"1.000000","isRelative":false,"endValue":"1.000000","identifier":"Opacity","duration":0.13333344459533691,"timingFunction":"easeinout","type":0,"oid":"23F6C632-5EA4-4381-A94B-9034DA79DF6A-2262-00004E8BFEAC3CCB","startTime":2.6333332061767578},{"startValue":"71px","isRelative":false,"endValue":"71px","identifier":"Height","duration":0.13333344459533691,"timingFunction":"easeinout","type":0,"oid":"23F6C632-5EA4-4381-A94B-9034DA79DF6A-2262-00004E8BFEAC3CCB","startTime":2.6333332061767578},{"startValue":"89px","isRelative":false,"endValue":"89px","identifier":"Left","duration":0.13333344459533691,"timingFunction":"easeinout","type":0,"oid":"23F6C632-5EA4-4381-A94B-9034DA79DF6A-2262-00004E8BFEAC3CCB","startTime":2.6333332061767578},{"startValue":"143px","isRelative":false,"endValue":"149px","identifier":"Top","duration":0.13333344459533691,"timingFunction":"easeinout","type":0,"oid":"23F6C632-5EA4-4381-A94B-9034DA79DF6A-2262-00004E8BFEAC3CCB","startTime":2.6333332061767578},{"startValue":"308px","isRelative":false,"endValue":"308px","identifier":"Width","duration":0.13333344459533691,"timingFunction":"easeinout","type":0,"oid":"23F6C632-5EA4-4381-A94B-9034DA79DF6A-2262-00004E8BFEAC3CCB","startTime":2.6333332061767578},{"startValue":"1.000000","isRelative":false,"endValue":"1.000000","identifier":"Opacity","duration":0.16666674613952637,"timingFunction":"easeinout","type":0,"oid":"23F6C632-5EA4-4381-A94B-9034DA79DF6A-2262-00004E8BFEAC3CCB","startTime":2.7666666507720947},{"startValue":"89px","isRelative":false,"endValue":"89px","identifier":"Left","duration":1.433333158493042,"timingFunction":"easeinout","type":0,"oid":"23F6C632-5EA4-4381-A94B-9034DA79DF6A-2262-00004E8BFEAC3CCB","startTime":2.7666666507720947},{"startValue":"149px","isRelative":false,"endValue":"149px","identifier":"Top","duration":1.2333333492279053,"timingFunction":"easeinout","type":0,"oid":"23F6C632-5EA4-4381-A94B-9034DA79DF6A-2262-00004E8BFEAC3CCB","startTime":2.7666666507720947},{"startValue":"1.000000","isRelative":false,"endValue":"1.000000","identifier":"Opacity","duration":1.0666666030883789,"timingFunction":"easeinout","type":0,"oid":"23F6C632-5EA4-4381-A94B-9034DA79DF6A-2262-00004E8BFEAC3CCB","startTime":2.9333333969116211},{"startValue":"1.000000","isRelative":false,"endValue":"1.000000","identifier":"Opacity","duration":0.19999980926513672,"timingFunction":"easeinout","type":0,"oid":"23F6C632-5EA4-4381-A94B-9034DA79DF6A-2262-00004E8BFEAC3CCB","startTime":4},{"startValue":"149px","isRelative":false,"endValue":"142px","identifier":"Top","duration":0.19999980926513672,"timingFunction":"easeinout","type":0,"oid":"23F6C632-5EA4-4381-A94B-9034DA79DF6A-2262-00004E8BFEAC3CCB","startTime":4},{"startValue":"0.000000","isRelative":true,"endValue":"1.000000","identifier":"Opacity","duration":0.10000038146972656,"timingFunction":"easeinout","type":0,"oid":"F401ECB8-C62F-476A-AEC8-0516D4412102-2262-00004F1413F338F9","startTime":4.1999998092651367},{"startValue":"218px","isRelative":true,"endValue":"218px","identifier":"Left","duration":0.10000038146972656,"timingFunction":"easeinout","type":0,"oid":"F401ECB8-C62F-476A-AEC8-0516D4412102-2262-00004F1413F338F9","startTime":4.1999998092651367},{"startValue":"178px","isRelative":true,"endValue":"178px","identifier":"Top","duration":0.10000038146972656,"timingFunction":"easeinout","type":0,"oid":"F401ECB8-C62F-476A-AEC8-0516D4412102-2262-00004F1413F338F9","startTime":4.1999998092651367},{"startValue":"6px","isRelative":true,"endValue":"6px","identifier":"Height","duration":0.10000038146972656,"timingFunction":"easeinout","type":0,"oid":"F401ECB8-C62F-476A-AEC8-0516D4412102-2262-00004F1413F338F9","startTime":4.1999998092651367},{"startValue":"5px","isRelative":true,"endValue":"5px","identifier":"Width","duration":0.10000038146972656,"timingFunction":"easeinout","type":0,"oid":"F401ECB8-C62F-476A-AEC8-0516D4412102-2262-00004F1413F338F9","startTime":4.1999998092651367},{"startValue":"0.000000","isRelative":true,"endValue":"1.000000","identifier":"Opacity","duration":0.10000038146972656,"timingFunction":"easeinout","type":0,"oid":"BFE54856-11D4-41A7-935C-07CDEFC589A9-2262-00004F0089AB8DCA","startTime":4.1999998092651367},{"startValue":"201px","isRelative":true,"endValue":"201px","identifier":"Left","duration":0.10000038146972656,"timingFunction":"easeinout","type":0,"oid":"BFE54856-11D4-41A7-935C-07CDEFC589A9-2262-00004F0089AB8DCA","startTime":4.1999998092651367},{"startValue":"179px","isRelative":true,"endValue":"179px","identifier":"Top","duration":0.10000038146972656,"timingFunction":"easeinout","type":0,"oid":"BFE54856-11D4-41A7-935C-07CDEFC589A9-2262-00004F0089AB8DCA","startTime":4.1999998092651367},{"startValue":"6px","isRelative":true,"endValue":"6px","identifier":"Height","duration":0.10000038146972656,"timingFunction":"easeinout","type":0,"oid":"BFE54856-11D4-41A7-935C-07CDEFC589A9-2262-00004F0089AB8DCA","startTime":4.1999998092651367},{"startValue":"5px","isRelative":true,"endValue":"5px","identifier":"Width","duration":0.10000038146972656,"timingFunction":"easeinout","type":0,"oid":"BFE54856-11D4-41A7-935C-07CDEFC589A9-2262-00004F0089AB8DCA","startTime":4.1999998092651367},{"startValue":"1.000000","isRelative":false,"endValue":"0.000000","identifier":"Opacity","duration":0.13333320617675781,"timingFunction":"easeinout","type":0,"oid":"F401ECB8-C62F-476A-AEC8-0516D4412102-2262-00004F1413F338F9","startTime":4.3000001907348633},{"startValue":"218px","isRelative":false,"endValue":"218px","identifier":"Left","duration":0.13333320617675781,"timingFunction":"easeinout","type":0,"oid":"F401ECB8-C62F-476A-AEC8-0516D4412102-2262-00004F1413F338F9","startTime":4.3000001907348633},{"startValue":"178px","isRelative":false,"endValue":"178px","identifier":"Top","duration":0.13333320617675781,"timingFunction":"easeinout","type":0,"oid":"F401ECB8-C62F-476A-AEC8-0516D4412102-2262-00004F1413F338F9","startTime":4.3000001907348633},{"startValue":"6px","isRelative":false,"endValue":"6px","identifier":"Height","duration":0.13333320617675781,"timingFunction":"easeinout","type":0,"oid":"F401ECB8-C62F-476A-AEC8-0516D4412102-2262-00004F1413F338F9","startTime":4.3000001907348633},{"startValue":"5px","isRelative":false,"endValue":"5px","identifier":"Width","duration":0.13333320617675781,"timingFunction":"easeinout","type":0,"oid":"F401ECB8-C62F-476A-AEC8-0516D4412102-2262-00004F1413F338F9","startTime":4.3000001907348633},{"startValue":"1.000000","isRelative":false,"endValue":"0.000000","identifier":"Opacity","duration":0.13333320617675781,"timingFunction":"easeinout","type":0,"oid":"BFE54856-11D4-41A7-935C-07CDEFC589A9-2262-00004F0089AB8DCA","startTime":4.3000001907348633},{"startValue":"201px","isRelative":false,"endValue":"201px","identifier":"Left","duration":0.13333320617675781,"timingFunction":"easeinout","type":0,"oid":"BFE54856-11D4-41A7-935C-07CDEFC589A9-2262-00004F0089AB8DCA","startTime":4.3000001907348633},{"startValue":"179px","isRelative":false,"endValue":"179px","identifier":"Top","duration":0.13333320617675781,"timingFunction":"easeinout","type":0,"oid":"BFE54856-11D4-41A7-935C-07CDEFC589A9-2262-00004F0089AB8DCA","startTime":4.3000001907348633},{"startValue":"6px","isRelative":false,"endValue":"6px","identifier":"Height","duration":0.13333320617675781,"timingFunction":"easeinout","type":0,"oid":"BFE54856-11D4-41A7-935C-07CDEFC589A9-2262-00004F0089AB8DCA","startTime":4.3000001907348633},{"startValue":"5px","isRelative":false,"endValue":"5px","identifier":"Width","duration":0.13333320617675781,"timingFunction":"easeinout","type":0,"oid":"BFE54856-11D4-41A7-935C-07CDEFC589A9-2262-00004F0089AB8DCA","startTime":4.3000001907348633},{"startValue":"0.000000","isRelative":false,"endValue":"1.000000","identifier":"Opacity","duration":0.13333320617675781,"timingFunction":"easeinout","type":0,"oid":"F401ECB8-C62F-476A-AEC8-0516D4412102-2262-00004F1413F338F9","startTime":4.4333333969116211},{"startValue":"218px","isRelative":false,"endValue":"218px","identifier":"Left","duration":0.13333320617675781,"timingFunction":"easeinout","type":0,"oid":"F401ECB8-C62F-476A-AEC8-0516D4412102-2262-00004F1413F338F9","startTime":4.4333333969116211},{"startValue":"178px","isRelative":false,"endValue":"178px","identifier":"Top","duration":0.13333320617675781,"timingFunction":"easeinout","type":0,"oid":"F401ECB8-C62F-476A-AEC8-0516D4412102-2262-00004F1413F338F9","startTime":4.4333333969116211},{"startValue":"6px","isRelative":false,"endValue":"6px","identifier":"Height","duration":0.13333320617675781,"timingFunction":"easeinout","type":0,"oid":"F401ECB8-C62F-476A-AEC8-0516D4412102-2262-00004F1413F338F9","startTime":4.4333333969116211},{"startValue":"5px","isRelative":false,"endValue":"5px","identifier":"Width","duration":0.13333320617675781,"timingFunction":"easeinout","type":0,"oid":"F401ECB8-C62F-476A-AEC8-0516D4412102-2262-00004F1413F338F9","startTime":4.4333333969116211},{"startValue":"0.000000","isRelative":false,"endValue":"1.000000","identifier":"Opacity","duration":0.13333320617675781,"timingFunction":"easeinout","type":0,"oid":"BFE54856-11D4-41A7-935C-07CDEFC589A9-2262-00004F0089AB8DCA","startTime":4.4333333969116211},{"startValue":"201px","isRelative":false,"endValue":"201px","identifier":"Left","duration":0.13333320617675781,"timingFunction":"easeinout","type":0,"oid":"BFE54856-11D4-41A7-935C-07CDEFC589A9-2262-00004F0089AB8DCA","startTime":4.4333333969116211},{"startValue":"179px","isRelative":false,"endValue":"179px","identifier":"Top","duration":0.13333320617675781,"timingFunction":"easeinout","type":0,"oid":"BFE54856-11D4-41A7-935C-07CDEFC589A9-2262-00004F0089AB8DCA","startTime":4.4333333969116211},{"startValue":"6px","isRelative":false,"endValue":"6px","identifier":"Height","duration":0.13333320617675781,"timingFunction":"easeinout","type":0,"oid":"BFE54856-11D4-41A7-935C-07CDEFC589A9-2262-00004F0089AB8DCA","startTime":4.4333333969116211},{"startValue":"5px","isRelative":false,"endValue":"5px","identifier":"Width","duration":0.13333320617675781,"timingFunction":"easeinout","type":0,"oid":"BFE54856-11D4-41A7-935C-07CDEFC589A9-2262-00004F0089AB8DCA","startTime":4.4333333969116211},{"startValue":"1.000000","isRelative":false,"endValue":"0.000000","identifier":"Opacity","duration":0.099999904632568359,"timingFunction":"easeinout","type":0,"oid":"F401ECB8-C62F-476A-AEC8-0516D4412102-2262-00004F1413F338F9","startTime":4.5666666030883789},{"startValue":"218px","isRelative":false,"endValue":"218px","identifier":"Left","duration":0.099999904632568359,"timingFunction":"easeinout","type":0,"oid":"F401ECB8-C62F-476A-AEC8-0516D4412102-2262-00004F1413F338F9","startTime":4.5666666030883789},{"startValue":"178px","isRelative":false,"endValue":"178px","identifier":"Top","duration":0.099999904632568359,"timingFunction":"easeinout","type":0,"oid":"F401ECB8-C62F-476A-AEC8-0516D4412102-2262-00004F1413F338F9","startTime":4.5666666030883789},{"startValue":"6px","isRelative":false,"endValue":"6px","identifier":"Height","duration":0.099999904632568359,"timingFunction":"easeinout","type":0,"oid":"F401ECB8-C62F-476A-AEC8-0516D4412102-2262-00004F1413F338F9","startTime":4.5666666030883789},{"startValue":"5px","isRelative":false,"endValue":"5px","identifier":"Width","duration":0.099999904632568359,"timingFunction":"easeinout","type":0,"oid":"F401ECB8-C62F-476A-AEC8-0516D4412102-2262-00004F1413F338F9","startTime":4.5666666030883789},{"startValue":"1.000000","isRelative":false,"endValue":"0.000000","identifier":"Opacity","duration":0.099999904632568359,"timingFunction":"easeinout","type":0,"oid":"BFE54856-11D4-41A7-935C-07CDEFC589A9-2262-00004F0089AB8DCA","startTime":4.5666666030883789},{"startValue":"201px","isRelative":false,"endValue":"201px","identifier":"Left","duration":0.099999904632568359,"timingFunction":"easeinout","type":0,"oid":"BFE54856-11D4-41A7-935C-07CDEFC589A9-2262-00004F0089AB8DCA","startTime":4.5666666030883789},{"startValue":"179px","isRelative":false,"endValue":"179px","identifier":"Top","duration":0.099999904632568359,"timingFunction":"easeinout","type":0,"oid":"BFE54856-11D4-41A7-935C-07CDEFC589A9-2262-00004F0089AB8DCA","startTime":4.5666666030883789},{"startValue":"6px","isRelative":false,"endValue":"6px","identifier":"Height","duration":0.099999904632568359,"timingFunction":"easeinout","type":0,"oid":"BFE54856-11D4-41A7-935C-07CDEFC589A9-2262-00004F0089AB8DCA","startTime":4.5666666030883789},{"startValue":"5px","isRelative":false,"endValue":"5px","identifier":"Width","duration":0.099999904632568359,"timingFunction":"easeinout","type":0,"oid":"BFE54856-11D4-41A7-935C-07CDEFC589A9-2262-00004F0089AB8DCA","startTime":4.5666666030883789}],"identifier":"kTimelineDefaultIdentifier","name":"Main Timeline","duration":4.6666665077209473}},"id":"6D0C1F5A-2411-4A01-B7BE-768890CD024D-2262-00004D9A77750409","sceneIndex":0,"perspective":"600px","oid":"6D0C1F5A-2411-4A01-B7BE-768890CD024D-2262-00004D9A77750409","initialValues":{"23F6C632-5EA4-4381-A94B-9034DA79DF6A-2262-00004E8BFEAC3CCB":{"Position":"absolute","BackgroundOrigin":"content-box","Left":"89px","Display":"inline","BackgroundImage":"logo-2-1.gif","RotationAxis":"0","Height":"71px","Overflow":"visible","BackgroundSize":"100% 100%","ZIndex":"3","Top":"133px","Width":"308px","Opacity":"0.000000","TagName":"div","InnerHTML":"","Rotate":"0deg"},"F401ECB8-C62F-476A-AEC8-0516D4412102-2262-00004F1413F338F9":{"BorderWidthBottom":"0px","TagName":"div","BorderColorBottom":"#A0A0A0","Opacity":"0.000000","BorderStyleRight":"None","BorderStyleBottom":"None","Top":"178px","BorderWidthRight":"0px","BorderStyleLeft":"None","BorderColorTop":"#A0A0A0","BorderColorLeft":"#A0A0A0","Position":"absolute","Height":"6px","Left":"218px","BorderColorRight":"#A0A0A0","BorderStyleTop":"None","ZIndex":"5","Width":"5px","BorderWidthTop":"0px","Overflow":"visible","BorderWidthLeft":"0px","BackgroundColor":"#4D85CD"},"5241B928-8349-41E2-92F9-0B9C1418528C-2262-00004DC629246EB5":{"Position":"absolute","BoxShadowXOffset":"0px","BackgroundOrigin":"content-box","Display":"inline","Left":"32px","BackgroundImage":"cloud.gif","BoxShadowBlurRadius":"0px","Cursor":"pointer","Overflow":"visible","BackgroundSize":"100% 100%","ZIndex":"2","BoxShadowColor":"#000000","ActionOnMouseClick":{"type":5,"goToURL":"http://shobon.hotcom-web.com/","openInNewWindow":false},"BoxShadowYOffset":"0px","Height":"200px","Width":"434.667px","Top":"207px","Opacity":"1.000000","TagName":"div"},"42EB235B-FA0B-48D5-9EC3-09EF36FCFE6C-2262-00004DB9C7550BEE":{"Position":"absolute","BackgroundOrigin":"content-box","Left":"-75px","Display":"inline","BackgroundImage":"headerbg.gif","Height":"200px","Overflow":"visible","BackgroundSize":"100% 100%","ZIndex":"1","Top":"0px","Width":"1083px","TagName":"div"},"BFE54856-11D4-41A7-935C-07CDEFC589A9-2262-00004F0089AB8DCA":{"BorderWidthBottom":"0px","TagName":"div","BorderColorBottom":"#A0A0A0","Opacity":"0.000000","BorderStyleRight":"None","BorderStyleBottom":"None","Top":"179px","BorderWidthRight":"0px","BorderStyleLeft":"None","BorderColorTop":"#A0A0A0","BorderColorLeft":"#A0A0A0","Position":"absolute","Height":"6px","Left":"201px","BorderColorRight":"#A0A0A0","BorderStyleTop":"None","ZIndex":"4","Width":"5px","BorderWidthTop":"0px","Overflow":"visible","BorderWidthLeft":"0px","BackgroundColor":"#4D85CD"}},"name":"Untitled Scene","backgroundColor":"#FFFFFF"}];

var javascriptMapping = {};


	
	var Custom = (function() {
	return {
	};
}());

	
	var hypeDoc = new HYPE();
	
	hypeDoc.attributeTransformerMapping = attributeTransformerMapping;
	hypeDoc.scenes = scenes;
	hypeDoc.javascriptMapping = javascriptMapping;
	hypeDoc.Custom = Custom;
	hypeDoc.currentSceneIndex = 0;
	hypeDoc.mainContentContainerID = "header_hype_container";
	hypeDoc.resourcesFolderName = resourcesFolderName;
	hypeDoc.showHypeBuiltWatermark = 0;
	hypeDoc.showLoadingPage = false;
	hypeDoc.drawSceneBackgrounds = true;
	hypeDoc.documentName = documentName;

	HYPE.documents[documentName] = hypeDoc.API;

	hypeDoc.documentLoad(this.body);
}());
