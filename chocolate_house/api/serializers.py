from rest_framework import serializers
from .models import SeasonalFlavor, Ingredient, CustomerSuggestion
from decimal import Decimal

class SeasonalFlavorSerializer(serializers.ModelSerializer):
    class Meta:
        model = SeasonalFlavor
        fields = '__all__'
    
    def validate(self, data):
        if data['availability_start'] > data['availability_end']:
            raise serializers.ValidationError({
                "availability_start": "Start date must be before end date."
            })
        return data



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
