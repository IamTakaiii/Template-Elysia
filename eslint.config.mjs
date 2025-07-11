import antfu from "@antfu/eslint-config"
import drizzle from "eslint-plugin-drizzle"

export default antfu(
    {
        stylistic: {
            indent: 4,
            quotes: "double",
        },
    },
    {
        files: ["**/*.js", "**/*.ts"],
        rules: {
            "node/prefer-global/process": "off",
            "no-console": "off",
            "antfu/no-top-level-await": "off",
            "antfu/top-level-functions": "off",
        },
        plugins: {
            drizzle,
        },
        ignores: [
            "docker-compose.yml",
            "docker-compose.dev.yml",
            "docker-compose.prod.yml",
        ],
    },
)
