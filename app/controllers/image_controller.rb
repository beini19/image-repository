class ImageController < ApplicationController
    def show
        puts "showing images/content"
        images = Image.all
        render json: {status: 'SUCCESS', message: 'Loaded all content', data: images}, status: :ok
    end
end
