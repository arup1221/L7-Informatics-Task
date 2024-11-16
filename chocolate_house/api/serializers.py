from rest_framework import serializers
from .models import SeasonalFlavor, Ingredient, CustomerSuggestion
from decimal import Decimal

class SeasonalFlavorSerializer(serializers.ModelSerializer):
    class Meta:
        model = SeasonalFlavor
        fields = '__all__'  

    def validate_rating(self, value):
        if value < Decimal('0.0') or value > Decimal('5.0'):
            raise serializers.ValidationError("Rating must be between 0 and 5")
        return value


class IngredientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ingredient
        fields = '__all__'  


class CustomerSuggestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomerSuggestion
        fields = '__all__' 

    # future Implementation for User
    def validate_status(self, value):
        valid_statuses = ['pending', 'reviewed', 'accepted', 'rejected']
        if value not in valid_statuses:
            raise serializers.ValidationError(f"Status must be one of the following: {', '.join(valid_statuses)}")
        return value

    def validate_priority(self, value):
        valid_priorities = ['low', 'medium', 'high']
        if value not in valid_priorities:
            raise serializers.ValidationError(f"Priority must be one of the following: {', '.join(valid_priorities)}")
        return value
