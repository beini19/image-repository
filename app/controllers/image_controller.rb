class ImageController < ApplicationController
    def index
        puts "showing images/content"
        images = Image.all
        render json: {status: 'SUCCESS', message: 'Loaded all content', data: images}, status: :ok
    end
    def show
        image = Image.find(params[:id])
        render json: {status: 'SUCCESS', message: 'Loaded information for one image', data: image}, status: :ok
    end
end
