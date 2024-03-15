module.exports = function(grunt) {
    // Configuração do Grunt
    grunt.initConfig({
        // Configuração para compilar LESS
        less: {
            development: {
                options: {
                    compress: false, // Mantenha isso como false para debug
                },
                files: {
                    "C:/PROJETOS_EBAC/Exercicio_M18/styles.css": "C:/PROJETOS_EBAC/Exercicio_M18/styles.less" 
                }
            },
            production: {
                options: {
                    compress: true, // Defina como true para a versão de produção
                },
                files: {
                    "C:/PROJETOS_EBAC/Exercicio_M18/styles.min.css": "C:/PROJETOS_EBAC/Exercicio_M18/styles.less" 
                }
            }
        },
        // Configuração para compressão de JavaScript
        uglify: {
            options: {
                compress: {
                    drop_console: true // Remover console.log durante a compressão
                }
            },
            my_target: {
                files: {
                    'C:/PROJETOS_EBAC/Exercicio_M18/scripts.min.js': ['C:/PROJETOS_EBAC/Exercicio_M18/scripts.js'] 
                }
            }
        }
    });

    // Carregamento de plugins do Grunt
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Registro de tarefas personalizadas
    grunt.registerTask('default', ['less', 'uglify']); // Defina quais tarefas executar
};
