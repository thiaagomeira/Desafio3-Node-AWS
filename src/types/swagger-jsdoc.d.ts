declare module 'swagger-jsdoc' {
  interface Options {
    definition: any;
    apis: string[];
  }

  function swaggerJsDoc(options: Options): any;

  export default swaggerJsDoc;
}
