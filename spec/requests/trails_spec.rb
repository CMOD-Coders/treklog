require 'rails_helper'

RSpec.describe "Trails", type: :request do
  describe "GET /trails" do
    it "gets all the trails" do
        user = User.where(email: 'willnotbereal@nawl.com').first_or_create(password: 'ABC123', password_confirmation: 'ABC123') 
        user.trails.create(
          name: "test trail",
          location: "test location",
          distance: "test distance",
          duration: "test duration",
          difficulty: "test difficulty",
          description: "test description",
          image: "test.image",
          user_id: user.id
        )
      get '/trails'
      trail = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(trail.length).to eq(1)
    end
  end
end
