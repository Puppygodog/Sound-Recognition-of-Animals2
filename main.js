function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Votj3sf42/', modelReady);
}
function modelReady()
{
    classifier.classify(gotResults);
}