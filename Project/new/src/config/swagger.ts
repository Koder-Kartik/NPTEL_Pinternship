import swaggerJsDoc from "swagger-jsdoc";

const options: swaggerJsDoc.Options = {
  definition: {
    openapi: "3.0.0",

    info: {
      title: "Blog App API",
      version: "1.0.0",
      description: "Auth-based blog application API",
    },

    servers: [
      {
        url: "http://localhost:3000",
        description: "Local server",
      },
    ],

    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },

    // 🔴 GLOBAL AUTH — applies to ALL routes
    security: [
      {
        bearerAuth: [],
      },
    ],
  },

  // 🔴 Swagger will scan these files for JSDoc comments
  apis: ["./src/routes/*.ts"],
};

export const swaggerSpec = swaggerJsDoc(options);
