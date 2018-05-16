
# AliasCSS
##### AliasCSS(ACSS) is a css framework: a css processor that is developed to experiment with design  of the layouts and web pages with very ease , flexibily and Quickly.
##### The idea behind the application of ACSS, is first introducted  to provide quick ways of experimenting layout design and trying new possibilitise for the look and feel of your desgin.
<!-- ###Intro Video :ALiasCSS -->
<!-- [![Alt AliasCSS Introduction](http://img.youtube.com/vi/JFzL5sTO6bM/0.jpg)](https://youtu.be/JFzL5sTO6bM) -->
## Getting Started
### Installation
##### There are two major files in ACSS one is css file and another is javascript file.The css file includes all classNames that doesnot require to be compiled. It should be alway used. The javascript file complies the valid ACSS classNames to corresponding defination and outputs in html document under style tag with id "styleAlias", these classNames can be moved anywhere in internal or external stylesheet
<!-- #### [Download AliasCSS](http://aliascss.com/doc.html#downloads) -->
### Let's start exploring AliassCSS with simple template.
```html

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
   
    <title>AliasCSS Template</title>

    <!-- AliasCSS -->
    <link href="css/alias.min.css" rel="stylesheet">

  </head>
  <body>
    <h1 class="fw6 br5px bgc_hccc c_ngreen p10px dib">Hello, world!</h1>
  </body>
  <script src="js/alias.min.js"></script>
</html>
```
#### How it works
##### "In AliasCSS , normally every Aliascss's className holds single property and value/s for it."

In the above example, look at class attribute of h1 element i.e __\<h1 class="fw6 br5px bgc_hccc c_ngreen p10px dib"\\>Hello, world\!\</h1\>__. This is just ordinary h1 element with class "fw6 br5px bgc_hccc c_ngreen p10px dib". But the classes defined holds special meaning, they are not just classNames they are also aliases of className property and values in the form of classNames----which is compiled to a corresponding property and value by ACSS.
__fw6 alias for font-wight:600 br5px__ alias for __border-radius:5px__ and  __bgc_hccc__ alias for __background-color:#ccc__, here __c_h__ means color by hexadecimal if you want color by name simply use c_n e.g __bgc_nred__

Most of the class attribute are define in the same way as above , it just requires to learn the rules of defining className, there are just few lines of rules to follow.

#### Rules
1.The first letter of each Property and value is picked for defining className, for eg. dn represent display:none; pf represent position:fixed , that means if you want to give element a style position to fixed , with AliasCSS you just need to add className "pf" in the element , if you want give above h1 element a fixed position then it looks like
```html
<h1 class="fw6 br5px bgc_hccc c_ngreen p10px dib pf">Hello, world!</h1>
```

2.If property or value has hyphen/s(-), the respective alias is build from the first letter of property plus first-letter after hyphen/s, for e.g. the alias of font-weight is represented by fw in className.ie fw9 font-weight:900, for e.g of value with hypens, lets take display:inline-block , if we have to define that style for our element we can simply add dib to class attribute where each letter of 'dib' represents disply,inline,block respectively.In this case ib is picked using above method, there is also few expection for these rule. see documenation for details under exception.
#
In general , first letter of every words of property and value are used to build the className for element.
3.Some className uses addtional character either hyphen(-) and underscore( _ ),these are used basically in advance and complicated className defination such as tranform, transition, font, color etc .Here are few examples:
c_ stands for color property

ff_ stands for font-family

t_ stands for transition

m10px stands for margin:10px and m-10px stands for margin:-10px

m10px10px means margin:10px 10px , and margin m10px10px20px5px means margin:10px 10px 20px 5px

Margin and padding works in similar fashion also to use percentage , just replace % by p i.e. m10p means margin:10%, this is due to className naming convention '%' is not allowed to include in naming className.
Use [Live Demo](http://aliascss.com/demo.html) to experiment and learn practically. First watch the video how to use live demo interface.



For more details see [documentation](http://aliascss.com/#documentation)

