# Product Tour

DaaS-IoT is a product designed to optimally leverage DaaS technology in the Internet of Things.

Compared to traditional models, DaaS introduces a significant evolution in mesh networks, thanks to the integrated management of critical aspects such as time synchronisation and data convergence.

Through distributed buffering mechanisms, DaaS improves the overall resilience of the communication infrastructure, ensuring greater reliability even in scenarios with intermittent or heterogeneous connectivity.

## Developing custom nodes with DaaS-IoT

DaaS-IoT is the product for developing vertical edge and fog computing solutions.

It provides a complete framework for creating self-provisioning mesh networks that connect cloud nodes and field devices based on embedded technologies.

No matter what technology and platform the nodes are developed on, all nodes will be able to communicate with each other, even using different network segments.

The integration of DaaS-IoT involves the development of nodes that implement specific functionalities: in the cloud, to enable device configuration and management, and on microcontrollers to generate data traffic from the field.

## Operational Phases

The use of the DaaS-IoT network is divided into four operational phases:

### Network configuration
Definition of node addresses and activation parameters, including local nodes called receivers.

### Network initialisation
Activation of receiver instances and preparation of the network for operation.

### Network event management
Implementation of logic for processing messages received from remote nodes (devices) through iot/processor/start events.

### Data exchange management
Definition of the functionalities necessary for sending data from receiver nodes to remote device nodes.

## DaaS-IoT for Edge and Fog Computing

Edge Computing architectures require flexible network infrastructures capable of enabling communication between autonomous peripheral nodes and central nodes responsible for data centralisation and service management.

Thanks to its dynamic node configuration alignment mechanisms, the DaaS protocol supports the implementation of Fog Computing models, extending cloud functionality through serverless approaches.

With DaaS, data paths between nodes can be dynamically modified, reconfiguring peripheral nodes in real time to optimize flows between the Edge and the Cloud.